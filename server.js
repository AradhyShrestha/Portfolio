require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const FormData = require('./models/formdata');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets (images/css/js) so front-end files can load
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname)); // serves index.html and other html at root

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});

// Health check
app.get('/health', (req, res) => res.send('OK'));

// Form submit route
app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // ✅ Save to MongoDB
    const newEntry = new FormData({ name, email, subject, message });
    await newEntry.save();

    // ✅ Send email to yourself
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your own inbox
      subject: `New Contact Message: ${subject}`,
      text: `
      You got a new message from your website contact form:

      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Form submitted and email sent successfully!' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong while sending email!' });
  }
});

// Optional: serve contact page on /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
