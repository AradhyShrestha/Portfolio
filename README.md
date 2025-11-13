# 🌐 Aradhy Shrestha — Personal Portfolio Website

Welcome to my **Personal Portfolio Website**, a modern, responsive, and interactive web application built to showcase my skills, services, and projects in **Web Development, MERN Stack, Python, and Java**.

---

## 🚀 Features

- **Fully Responsive Design** – Works smoothly across all devices  
- **Modern UI/UX** – Clean and minimal design built for performance  
- **Dynamic Contact Form** – Connected to MongoDB with backend email integration  
- **Smooth Animations** – Built using AOS and custom CSS transitions  
- **Reusable Components** – Easy to extend and modify  
- **Optimized Performance** – Lightweight structure and fast loading  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Version Control** | Git & GitHub |
| **Deployment** | Render / Vercel / Netlify |
| **Additional Libraries** | AOS, BootstrapMade (Template Base), dotenv, nodemailer |

---

## 📂 Folder Structure

myproject/
│
├── assets/ # Images, icons, favicon, and static files
│ ├── img/
│ └── php_email_form/
│ └── validate.js
│
├── forms/ # Form handlers
│ └── contact.js # Node backend script (Mongo + Email)
│
├── index.html # Main portfolio page
├── about.html # About page
├── services.html # Services section
├── contact.html # Contact section
├── server.js # Express server setup
├── .env # Environment variables
└── package.json # Node dependencies


---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root and add:

MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
PORT=3000

4. Run the server
npm start


Your portfolio will run at http://localhost:3000

📨 Contact Form Integration

The contact form is connected to:

MongoDB (to store submissions)

Nodemailer (to send messages directly to your email)

To customize email behavior, open forms/contact.js and modify the transporter details or mail template.

🌍 Deployment Guide
🧭 On Render or Railway

Push your code to GitHub

Create a new Web Service on Render or Railway

Connect your repository

Add Environment Variables (MONGO_URI, EMAIL_USER, EMAIL_PASS)

Deploy 🎉

💡 On Netlify (Frontend Only)

If you’re deploying frontend separately:

Upload your index.html and assets folder

Set your backend API endpoint in form action="https://yourbackend.onrender.com/contact"

🧑‍💻 About Me

I’m Aradhy Shrestha, a passionate developer skilled in:

MERN Stack Development

Python and Java Programming

UI/UX Design

Git and Version Control

I create efficient, scalable, and beautifully designed web applications that bring ideas to life.

📫 Connect With Me

📧 Email: aradhyshrestha1509@gmail.com

💻 GitHub: github.com/yourusername

📍 Location: Gola Gokarannath, UP, India

🏷️ License

This project is open-source under the MIT License — feel free to use and modify it for your personal portfolio.

⭐ If you like this project, don’t forget to star the repo!

---

Would you like me to include **your exact GitHub repo link and email setup code** (so the `form` directly sends messages to your email)?  
I can modify the `README.md` accordingly.
