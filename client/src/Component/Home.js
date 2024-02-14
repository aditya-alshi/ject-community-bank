import { useLoaderData } from "react-router-dom";
import { getCookie} from "../theCookie";
import { FaRegStar } from "react-icons/fa";



export const loader = async () => {
  try {
    const url = "http://localhost:9000/allpeople";
    const res9000 = await fetch(url);
    const people = await res9000.json();
    return people;
  } catch (err) {
    console.log(err);
  }
};

export default function Home() {
  const theCookieEmail = getCookie().email;
  let people = useLoaderData();
  people = people.filter(item => item.email !== theCookieEmail );

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
