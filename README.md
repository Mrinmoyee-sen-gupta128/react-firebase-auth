# React Firebase Authentication App

**Student ID:** C243452
**Name:** Mrinmoyee Sen Gupta

## Description

A React + Vite web app with Firebase Authentication. Users can register,
log in, view a protected dashboard and manage their profile.

## Features

- User registration and login (Firebase Authentication)
- Global auth state using React Context (`AuthContext.jsx`)
- Protected routes (`ProtectedRoute.jsx`), so only logged-in users can see the Dashboard and Profile
- Pages: Home, Login, Register, Dashboard, Profile
- Navigation bar (`Navbar.jsx`)

## Tech Stack

React, Vite, Firebase Authentication, React Router

## Setup

1. Clone the repository:
   `git clone https://github.com/Mrinmoyee-sen-gupta128/react-firebase-auth.git`
2. Install dependencies:
   `npm install`
3. Create a Firebase project and add your config to `src/firebase.js`
   (or a `.env` file with your `VITE_FIREBASE_*` values).
4. Run the app:
   `npm run dev`

## Project Structure

src/
├── pages/ (Home, Login, Register, Dashboard, Profile)
├── AuthContext.jsx
├── ProtectedRoute.jsx
├── Navbar.jsx
├── firebase.js
└── main.jsx / App.jsx
