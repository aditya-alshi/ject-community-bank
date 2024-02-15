import { getCookie } from "../theCookie";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const url = "https://jectcommunitybank.onrender.com/allpeople";
    // const url = "http://localhost:8000/allpeople";
    const res8000 = await fetch(url);
    const people = await res8000.json();
    return people;
  } catch (err) {
    return err;
  }
};

export default function RenderPeople() {
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

  return <div className="home--wrapper">{renderPeople}</div>;
}
