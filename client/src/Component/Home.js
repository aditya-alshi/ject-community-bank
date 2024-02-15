import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { setCookie, getCookie } from "../theCookie";
import { FaRegStar } from "react-icons/fa";

export const action = async () => {
  try {
    setCookie({ login: false });
    return redirect('/');
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const loader = async () => {
  try {
    // const url = 'https://jectcommunitybank.onrender.com/allpeople'
    const url = "http://localhost:8000/allpeople";
    const res8000 = await fetch(url);
    const people = await res8000.json();
    return people;
  } catch (err) {
    console.log(err);
  }
};

export default function Home() {
  const theCookieEmail = getCookie().email;
  let people = useLoaderData();
  people = people.filter((item) => item.email !== theCookieEmail);
  const renderPeople = people.map((person) => {
    return (
      <div key={person._id} className="people--items">
        <img className="their--display--picture" src="" alt="" />
        <p className="persons--name person--detail">
          {person.firstName} {person.lastName}
        </p>
        <p className="person--detail persons-rating">
          <FaRegStar className="rating--stars" />
          <FaRegStar className="rating--stars" />
          <FaRegStar className="rating--stars" />
          <FaRegStar className="rating--stars" />
          <FaRegStar className="rating--stars" />
        </p>
      </div>
    );
  });

  return (
    <>
      <Form method="post" className="home--logout--button" replace>
        <button type="submit" >Logout</button>
      </Form>
      <div className="home--wrapper">{renderPeople}</div>;
    </>
  );
}
