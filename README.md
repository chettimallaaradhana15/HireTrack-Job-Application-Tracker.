# HireTrack — Full-Stack Job Application Tracker

A responsive MERN-style job application tracker built with React, Express, MongoDB, and JWT authentication.

## Features
- Register / sign in with hashed passwords and JWT authentication
- Create, edit, delete, search, and filter job applications
- Track Applied, Interview, Offer, Rejected, and Saved statuses
- Dashboard statistics and status breakdown
- Mobile-friendly responsive UI
- Demo mode in the frontend when the API is not configured (data stays in the browser)

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcryptjs

## Run locally

### 1. Backend
```bash
cd server
cp .env.example .env
# Add your MongoDB connection string and JWT secret to .env
npm install
npm run dev
```
The API runs at `http://localhost:5000`.

### 2. Frontend
In a second terminal:
```bash
cd client
npm install
npm run dev
```
Open the Vite URL shown in the terminal.

## Deploy
- Create a MongoDB Atlas database and copy its connection string.
- Deploy `server` to Render. Set `MONGO_URI`, `JWT_SECRET`, and `CLIENT_ORIGIN`.
- Deploy `client` to Vercel. Set `VITE_API_URL` to the deployed backend URL plus `/api`.
- Set `CLIENT_ORIGIN` on the backend to the deployed Vercel URL.

## Important
This package is source code, not yet a public hosted website. A live public link requires deployment to hosting and a MongoDB database under an account you control. Never share your database password or JWT secret publicly.
