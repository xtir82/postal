import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails.jsx";

const router = createBrowserRouter([
    { path: '/',
      element: <RootLayout />,
      children:[
            { path: '/',
              element: <Posts />,
              loader: postsLoader,
              children: [
                  { path: '/create-post', element: <NewPost />, action: newPostAction  },
                  { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader },
              ],
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)