import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Form from './Components/Form';
import Intro from './Components/Intro';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Intro />
      },
      {
        path: '/signup',
        element: <Form />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)