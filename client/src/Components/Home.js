import React from "react";

export default function Home(){


    const [people, setPeople] = React.useState([])

    React.useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://jectcommunitybank.onrender.com/allpeople')
                const data = await response.json();
                setPeople(data);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    },[])

    const renderPeople = people.map(person => <div
        key={person._id}
        className="person--card">
            <div className="person--image"></div>
            <div className="person--name">
                {person.firstName} {person.lastName}
            </div>
    </div>)
   

    return(
        <div className="home--main--wrapper">
            {renderPeople}
        </div>
    )
}