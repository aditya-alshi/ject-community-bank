import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// importing Components
import Welcome, { loader as welcomeLoader } from "./Component/Welcome";
import Intro from "./Component/Intro";
import Register, {
    action as registerAction 
  } from "./Component/Register";
import Login, {
    action as loginAction 
  } from "./Component/Login";
import Home, {
    action as homeAction 
  } from "./Component/Home";
import RenderPeople, {
    loader as renderPeopleLoader,
  } from "./Component/RenderPeople";
import UserProfile, {
    loader as userProfileLoader,
    action as userEditaction,
  } from "./Component/UserProfile";
import UploadProfilePicture, {
    loader as userProfilePictureLoader,
    action as userProfilePictureAction,
  } from "./Component/UploadProfilePicture";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    loader: welcomeLoader,
    children: [
      {
        index: true,
        element: <Intro />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
        children: [
          {
            path: "login",
            element: <Login />,
            action: loginAction,
          },
        ],
      },
      {
        path: "/home",
        element: <Home />,
        action: homeAction,
        children: [
          {
            index: true,
            element: <RenderPeople />,
            loader: renderPeopleLoader,
          },
          {
            path: "userProfile",
            element: <UserProfile />,
            loader: userProfileLoader,
            action: userEditaction,
            children: [
              {
                index: true,
                element: <UploadProfilePicture />,
                loader: userProfilePictureLoader,
                action: userProfilePictureAction
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
