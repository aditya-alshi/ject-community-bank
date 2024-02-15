import React from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
// import { FaBars } from "react-icons/fa6";
import { getCookie } from "../theCookie";

// this loader function is used to sync the data, which in this case is getCookie().login, with any action function defined in any of the Routes/Components. So, basically, clicking on the action function anywhere in the project forces the loader to run. This helps in revalidating the payload on 'loggedIn' and that value is fed to the 'to' attribute of Link component down below.
export const loader = () => {
  return getCookie().login;
};

export default function Welcome() {
  const loggedIn = useLoaderData();
  console.log(loggedIn);
  return (
    <div className="welcome--main--wrapper">
      <header className="welcome--header">
        <Link
          replace
          className="welcome--header--main--heading"
          to={`${loggedIn ? "/home" : ""}`}
        >
          Ject Community Bank
        </Link>
        {/* <FaBars className="options--dropdown" /> */}
      </header>
      <main className="welcome--main">
        <Outlet />
      </main>
      <footer className="welcome--footer"></footer>
    </div>
  );
}
//
