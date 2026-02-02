const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// MongoDB Schema
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Form =
  mongoose.models.Form || mongoose.model("Form", FormSchema);

// MAIN HANDLER (Vercel Serverless)
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Connect MongoDB (reuse connection)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    // Save to MongoDB
    await Form.create({ name, email, subject, message });

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message: ${subject || "No Subject"}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {
    console.error("Contact Error:", error);
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
};
