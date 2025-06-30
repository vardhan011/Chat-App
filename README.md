# 💬 Real-Time Chat App (MERN + WebSocket)

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with WebSocket integration for instant messaging.

This app allows users to join using a username, send and receive messages in real time, and view chat history — all stored in MongoDB.

---

## 🚀 Live Demo

 Link:https://chat-app-teal-pi-59.vercel.app/

(Replace the above URLs with your actual deployed links)

---

## 🧰 Tech Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- WebSocket: ws module (built-in)
- Database: MongoDB (via Mongoose)
- Deployment: Vercel (frontend), Render (backend)

---

## 📁 Project Structure

chat-app/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── models/Message.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── Join.jsx
    │   │   └── Chat.jsx
    │   └── index.css
    └── index.html

---

## ⚙️ How to Run Locally

### Backend
cd backend
npm install
node server.js

Make sure your `.env` file contains:

MONGO_URI=your_mongodb_connection_string

### Frontend
cd frontend
npm install
npm run dev

Access it at: http://localhost:5173

---

## 🧪 Features

- Username-based login (no auth for simplicity)
- Real-time message delivery using WebSockets
- Message persistence in MongoDB
- Chat history on rejoin
- Clean, responsive UI with Tailwind CSS
- Auto-scroll and long message support

---


## 📄 Author

Govardhan Reddy  
Email: borragovardhanreddy@gmail.com  
GitHub: https://github.com/vardhan011

---


