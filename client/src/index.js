import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import ErrorPage from './Components/ErrorPage';
import Welcome from './Components/Welcome';
import Form from './Components/Form';
import Intro from './Components/Intro';
import Login from './Components/Login';
import Home from './Components/Home'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Intro />
      },
      {
        path: '/signup',
        element: <Form />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
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