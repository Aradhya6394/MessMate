# 🍽️ MessMate - Hostel Mess Management System

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

MessMate is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to simplify hostel mess management. It enables administrators to manage students, attendance, daily menus, complaints, notices, and activities through a centralized dashboard while providing students with an easy-to-use interface.

---

## 🌐 Live Demo

### Frontend
https://mess-mate-xi-seven.vercel.app/

### Backend API
https://messmate-jyhn.onrender.com

---

# 📸 Screenshots

> Add screenshots here after uploading them.

- Login Page
- Dashboard
- Student Management
- Attendance Page
- Menu Management
- Complaints
- Notices
- Activities

---

# ✨ Features

## 👤 Authentication
- Secure JWT Authentication
- Login & Registration
- Protected Routes
- Role Based Authorization
- Token Storage

---

## 👨‍🎓 Student Management
- Add Students
- Edit Student Details
- Delete Students
- View Student List
- Search Students

---

## 📅 Attendance Management
- Mark Attendance
- Daily Attendance Records
- Attendance History
- Attendance Statistics

---

## 🍛 Daily Menu
- Add Menu
- Update Menu
- Delete Menu
- View Today's Menu

---

## 📢 Notice Board
- Create Notices
- Update Notices
- Delete Notices
- View Latest Notices

---

## 🎉 Activities
- Add Events
- Update Activities
- Delete Activities
- Display Upcoming Events

---

## 📝 Complaint Management
- Register Complaints
- Track Complaint Status
- Resolve Complaints

---

## 📊 Dashboard
- Student Count
- Attendance Summary
- Complaint Statistics
- Notices Overview
- Activity Overview

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

## Backend
- Node.js
- Express.js
- JWT Authentication
- Mongoose

## Database
- MongoDB Atlas

## Deployment
- Frontend → Vercel
- Backend → Render

---

# 📂 Project Structure

```
MessMate
│
├── client
│   ├── public
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
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

```bash
cd server
```

Install packages

```bash
npm install
```

Create a `.env`

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

```bash
cd client
```

Install packages

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=https://messmate-jyhn.onrender.com
```

Run

```bash
npm run dev
```

---

# 🚀 Build

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
```

---

## Students

```
GET /students
POST /students
PUT /students/:id
DELETE /students/:id
```

---

## Attendance

```
GET /attendance
POST /attendance
PUT /attendance/:id
DELETE /attendance/:id
```

---

## Menu

```
GET /menu
POST /menu
PUT /menu/:id
DELETE /menu/:id
```

---

## Complaints

```
GET /complaints
POST /complaints
PUT /complaints/:id
DELETE /complaints/:id
```

---

## Notices

```
GET /notices
POST /notices
PUT /notices/:id
DELETE /notices/:id
```

---

## Activities

```
GET /activity
POST /activity
PUT /activity/:id
DELETE /activity/:id
```

---

# 🔒 Security

- JWT Authentication
- Password Encryption
- Protected Routes
- Role Based Access
- Environment Variables
- CORS Enabled

---

# Future Improvements

- Email Notifications
- QR Attendance
- Meal Booking
- Online Payments
- Analytics Dashboard
- Mobile Responsive UI
- Admin Reports
- Student Profile
- Dark Mode

---

# 👩‍💻 Author

**Aradhya Patel**

GitHub:
https://github.com/Aradhya6394

LinkedIn:
(Add your LinkedIn URL)

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Show Your Support

If you like this project,

⭐ Star this repository

🍴 Fork it

💡 Contribute to it

Thank you for visiting **MessMate** ❤️
