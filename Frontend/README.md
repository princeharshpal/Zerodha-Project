# Full stack (MERN) Trading stocks monitor Project

##  Overview
This is a full-stack MERN (MongoDB, Express, React, Node.js) application for a **Trading Dashboard** that allows users to sign up, log in, place orders, view their holdings, and manage their trading activities. The project implements **user authentication and authorization** using **bcrypt** for password hashing and **JWT** for secure access.

##  Features
- **User Authentication & Authorization** (JWT & bcrypt)
- **Responsive UI** with Tailwind CSS
- **Stock Market Orders Management**
- **Buy & Sell Stocks**
- **Watchlist for Stocks**
- **User Dashboard** to track orders and positions

## 📂 Folder Structure
```plaintext
project-root/
│── Backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│
│── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│
│── .gitignore
│── package.json
│── README.md
```

## 🔧 Tech Stack

### Frontend:

- React.js (with React Router)
- Tailwind CSS for styling
- Axios for API calls

## Backend:

- Node.js & Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcrypt for password hashing

 Installation & Setup

## Clone the repository:

### Link: 
``git clone https://github.com/your-username/your-repo.git
cd your-repo ``

## 🔑 API Endpoints

### Authentication
| Method | Endpoint  | Description          |
|--------|-----------|----------------------|
| POST   | /register | Register a new user  |
| POST   | /login    | Authenticate a user  |
| GET    | /profile  | Get user profile     |

### Orders
| Method | Endpoint   | Description         |
|--------|------------|---------------------|
| POST   | /new-order | Place a new order   |
| GET    | /orders    | Fetch user orders   |


## Install dependencies:

### For Backend:

- cd Backend
- npm install

### For Frontend:

- cd ../Frontend
- npm install

## Setup environment variables:

Create a .env file in the Backend folder and add:

` MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000 `

## Run the project:

### Start Backend:

- cd Backend
- npm run dev

### Start Frontend:
- cd frontend
- nodemon server.js
