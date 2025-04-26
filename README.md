# Postal - A Social Media Post Application

Postal is a modern React application that allows users to create, view, and interact with social media posts. Built with React 19 and React Router, it provides a seamless user experience for sharing thoughts and ideas.

## Features

- **View Posts**: Browse through a list of posts on the home page
- **Create Posts**: Add new posts with your name and message
- **View Post Details**: Click on any post to see its full details
- **Responsive Design**: Works on both desktop and mobile devices

## Technologies Used

- **React 19**: For building the user interface
- **React Router 7**: For navigation and routing
- **React Icons**: For UI elements
- **Vite**: As the build tool and development server
- **CSS Modules**: For component-scoped styling
- **RESTful API**: Backend communication for data persistence

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd postal
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Start the backend server (required for the application to work):
   ```
   # The application expects a backend server running at http://localhost:8080
   # Follow the backend setup instructions if provided separately
   ```

## Usage

After starting both the frontend and backend servers:

1. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)
2. Browse existing posts on the home page
3. Click on a post to view its details
4. Click the "Create Post" button to add a new post
5. Fill in your name and message, then submit

## Project Structure

```
postal/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Modal.jsx   # Modal component for overlays
│   │   ├── Post.jsx    # Individual post component
│   │   └── PostsList.jsx # List of posts component
│   ├── routes/         # Application routes
│   │   ├── NewPost.jsx # Create post page
│   │   ├── PostDetails.jsx # Post details page
│   │   ├── Posts.jsx   # Main posts listing page
│   │   └── RootLayout.jsx # Root layout with common elements
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point with routing
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

