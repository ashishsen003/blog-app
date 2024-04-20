# MERN Stack Blog Website with Admin Dashboard

Welcome to the MERN Stack Blog Website! This project is a full-stack application built using MongoDB, Express.js, React, and Node.js. 
It features a blog where users can read posts, comment on them, and like comments. Additionally, an admin dashboard is available with 
features such as creating, deleting, updating, and reading posts and comments. Users can upload their profile picture, and Firebase is used to store these images.

## Demo
live demo [Website Demo](https://blog-app-64zh.onrender.com)

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
### Backend Setup
5. Navigate to the backend folder `cd backend`
6. Install dependencies `npm install or yarn install`
7. Start the backend Server `npm run dev`
8. Set up environment variables (details provided in `.env.example`)
   - Copy the `.env.example` file to a new file named `.env`.
   - Replace the placeholder values in the `.env` file with your actual environment variables.
   - Never commit your `.env` file to version control to avoid exposing sensitive information.


## Usage

1. Visit the website and browse through the posts.
2. Sign up with your Google account or create a new account.
3. You can upload and change your profile picture.
4. Explore the dark mode and light mode themes.
5. Leave comments on posts and like other user's comments.
6. Access the admin dashboard by logging in with the following credentials:
   - **Email:** admin@gmail.com
   - **Password:** admin@blog
7. In admin dashboard you can create a new post and can see all the users, posts and comments 

## Image Upload with Firebase

User profile pictures are uploaded to Google Firebase. After uploading an image, you will receive a link to the uploaded image, which you can then use to set the profile picture for the user in the MongoDB database.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Google OAuth for authentication
- Google Firebase for image upload

## Features

- User authentication (sign up, login) with Google OAuth
- Profile picture upload for users using Firebase
- Dark mode and light mode themes
- Reading, commenting, and liking posts
- Admin dashboard for managing posts and comments

## Configuration

- Set up environment variables as specified in `.env.example`:
  - `MONGO_URI`: MongoDB connection URI
  - `GOOGLE_CLIENT_ID`: Google OAuth client ID
  - `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
  - `JWT_SECRET`: Secret key for JWT authentication
  - `REACT_APP_API_URL`: API URL for the React frontend

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
- [Google Firebase](https://firebase.google.com/)

## Contact

For questions or feedback, contact the project maintainer: [Your Name](mailto:your-email@example.com)
