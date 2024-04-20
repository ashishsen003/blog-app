# MERN Stack Blog Website with Admin Dashboard

Welcome to the MERN Stack Blog Website! This project is a full-stack application built using MongoDB, Express.js, React, and Node.js. 
It features a blog where users can read posts, comment on them, and like comments. Additionally, an admin dashboard is available with 
features such as creating, deleting, updating, and reading posts and comments. Users can upload their profile picture, and Firebase is used to store these images.

## Demo
live demo [Website](https://blog-app-64zh.onrender.com), [Video](https://www.youtube.com/watch?v=UOEPYxzzwO8)

## Screenshots

*Homepage of the Website*
![Screenshot 2024-04-19 205404](https://github.com/ashishsen003/blog-app/assets/112822104/fe66473a-8da9-4c0d-8f19-ef6ce3096238)

*Admin Dashboard for managing posts and comments*
![Screenshot 2024-04-19 215303](https://github.com/ashishsen003/blog-app/assets/112822104/75e21535-9d98-493f-860e-e3efbe3eeb5d)

## Installation

1. Clone the repository: `git clone https://github.com/ashishsen003/blog-app.git`
### Frontend Setup
2. Navigate to the frontend folder `cd frontend`
3. Install dependencies `npm install or yarn install`
4. Start the frontend Server `npm run dev`
5. This will run frontend server on `http://localhost:5173`
### Backend Setup
6. Navigate to the backend folder `cd backend`
7. Install dependencies `npm install or yarn install`
8. Start the backend Server `npm run dev`
9. This will run backend server on `PORT: 3000`


## Usage

1. Visit the website and browse through the posts.
2. Sign up with your Google account or create a new account.
3. You can upload and change your profile picture.
4. Explore the dark mode and light mode themes.
5. Leave comments on posts and like other user's comments.
6. Access the admin dashboard by logging in with the following credentials:
   - **Email:** admin@gmail.com
   - **Password:** admin@blog
7. In admin dashboard you can create a new post and can see all the users, posts and comments.

## Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- Tailwind CSS
- Flowbite react
- Google firebase

## Features

- User authentication (sign up, login) with Google OAuth
- Profile picture upload
- Dark mode and light mode themes
- Reading, commenting, and liking comments
- Admin dashboard for managing posts and comments

## Configuration

- Set up environment variables as specified in `.env.example`:
  - `VITE_FIREBASE_API_KEY` = 'your-firebase-api-key'
  - `MONGO` = 'your-mongodb-uri'
  - `JWT_SECRET` = 'your-jwt-secret'
- Copy the `.env.example` file to a new file named `.env`.
- Replace the placeholder values in the `.env` file with your actual environment variables.
- Never commit your `.env` file to version control to avoid exposing sensitive information.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.
