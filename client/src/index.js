import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';

// importing Components
import Welcome from './Component/Welcome';
import Intro from './Component/Intro';
import Register, {action as registerAction} from './Component/Register';
import Home from './Component/Home';
import { loader as homeLoader } from './Component/Home'; //loader function
import { action as loginAction} from './Component/Login';
import Login from './Component/Login';  

const router = createBrowserRouter([
    {
        path : '/',
        element : <Welcome />,
        children:[
            {
                index:true,
                element: <Intro />,
                action: loginAction,
            },
            {
                path: '/register',
                element: <Register />,
                action: registerAction,
                children:[
                    {
                        path: 'login',
                        element: <Login />,
                        action:loginAction
                    },
                ]
            },
            {
                path:'/home',
                element: <Home />,
                loader: homeLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>  
)