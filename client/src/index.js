import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Form from './Components/Form';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  },
  {
    path: '/signup',
    element: <Form />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)