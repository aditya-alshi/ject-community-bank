import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';

// importing Components
import Welcome, { loader as welcomeLoader } from './Component/Welcome';
import Intro from './Component/Intro';
import Register, {action as registerAction} from './Component/Register';
import Home, { 
    action as homeAction,
    loader as homeLoader 
} from './Component/Home';
import { action as loginAction} from './Component/Login';
import Login from './Component/Login';  

const router = createBrowserRouter([
    {
        path : '/',
        element : <Welcome />,
        loader: welcomeLoader,
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
                loader: homeLoader,
                action: homeAction
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>  
)