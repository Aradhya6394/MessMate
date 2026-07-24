# 🍽️ MessMate – Smart Hostel Mess Management System

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)
![License](https://img.shields.io/badge/License-MIT-blue)

MessMate is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application that simplifies hostel mess management by providing one centralized platform for students and administrators.

It helps manage:

- 👨‍🎓 Students
- 📅 Attendance
- 🍛 Daily Menu
- 📝 Complaints
- 📢 Notices
- 👤 User Authentication
- 📊 Dashboard Statistics

---

# 🌐 Live Demo

### Frontend
https://mess-mate-xi-seven.vercel.app/

### Backend API
https://messmate-jyhn.onrender.com

---

# 📸 Screenshots

> *(Add screenshots here later)*

- Login Page
- Dashboard
- Student Management
- Attendance
- Complaint Management
- Profile Page

---

# ✨ Features

## 🔐 Authentication

- Secure JWT Authentication
- User Registration
- User Login
- Protected Routes
- Role-Based Authorization
- Persistent Login using JWT

---

## 👤 User Profile

- View Logged-in User Profile
- User Information
- Role Display
- Dynamic Profile Avatar

---

## 👨‍🎓 Student Management

- Add Students
- Edit Student Details
- Delete Students
- Search Students
- View Student List

---

## 📅 Attendance Management

- Mark Daily Attendance
- View Attendance Records
- Attendance Statistics

---

## 🍛 Daily Menu Management

- Add Daily Menu
- Edit Menu
- Delete Menu
- View Today's Menu

---

## 📝 Complaint Management

- Register Complaint
- View Complaints
- Update Complaint Status
- Delete Complaint

---

## 📢 Notice Board

- Create Notice
- Update Notice
- Delete Notice
- Display Latest Notices

---

## 📊 Dashboard

Dashboard includes quick statistics like:

- Total Students
- Attendance Summary
- Today's Menu
- Complaints Overview
- Notices

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Context API
- Tailwind CSS
- Vite

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

---

# 📂 Project Structure

```
MessMate
│
├── client
│   ├── public
│   ├── src
│   │
│   ├── assets
│   ├── components
│   ├── context
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── validators
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Aradhya6394/MessMate.git
```

```bash
cd MessMate
```

---

# Backend Setup

Move to server

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm run dev
```

---

# Frontend Setup

Move to client

```bash
cd client
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=https://messmate-jyhn.onrender.com
```

Run Frontend

```bash
npm run dev
```

---

# 🚀 Production Build

Frontend

```bash
npm run build
```

Backend

```bash
npm start
```

---

# 🔑 API Endpoints

## Authentication

```
POST /users/register
POST /users/login
GET  /users/profile
```

---

## Students

```
GET    /students
POST   /students
PUT    /students/:id
DELETE /students/:id
```

---

## Attendance

```
GET    /attendance
POST   /attendance
PUT    /attendance/:id
DELETE /attendance/:id
```

---

## Menu

```
GET    /menu
POST   /menu
PUT    /menu/:id
DELETE /menu/:id
```

---

## Complaints

```
GET    /complaints
POST   /complaints
PUT    /complaints/:id
DELETE /complaints/:id
```

---

## Dashboard

```
GET /dashboard
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Role-Based Authorization
- Environment Variables
- MongoDB Atlas
- CORS Enabled

---

# 🚧 Future Improvements

- Email Notifications
- QR Code Attendance
- Meal Booking System
- Online Payment Integration
- Analytics Dashboard
- Mobile Responsive Improvements
- Admin Reports
- Edit Profile
- Profile Picture Upload
- Dark Mode
- Password Reset

---

# 👩‍💻 Author

**Aradhya Patel**

GitHub

https://github.com/Aradhya6394

LinkedIn

*(Add your LinkedIn profile here)*

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project useful,

⭐ Star the repository

🍴 Fork the project

💡 Share your feedback

Thank you for visiting **MessMate** ❤️
