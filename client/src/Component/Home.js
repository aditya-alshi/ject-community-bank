import React from "react";
import { Form, Outlet, redirect, Link } from "react-router-dom";
import { setCookie } from "../theCookie";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";

export const action = async () => {
  try {
    setCookie({ login: false });
    return redirect("/");
  } catch (err) {
    console.log(err);
    return "";
  }
};

export default function Home() {
  return (
    <>
      <Form method="post" className="home--logout--button" replace>
        <button type="submit">Logout</button>
      </Form>
      <div className="home--section">
        <aside className="home--sidebar">
          <Link className="home--sidebar--links home--profile--link" to={"userProfile"}>
            <CgProfile className="home--sidebar--icon home--profile--icon" />
            <span className="home--sidebar--Text">Profile</span>
          </Link>
          <Link
            className="home--sidebar--links home--renderPeople--link"
            to={""}
          >
            <LiaUserFriendsSolid className="home--sidebar--icon render--people--icon" />
            <span className="home--sidebar--Text">People</span>
          </Link>
        </aside>
        <Outlet className="home--outlet" />
      </div>
    </>
  );
}
