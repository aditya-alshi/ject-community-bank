import React from "react";
import {Link} from 'react-router-dom';

export default function Login(){

    const [loginData, setLoginData] = React.useState({
        loginEmail: "",
        loginPassword: ""
    });

    function handleLoginChange(event){
        event.preventDefault();
        setLoginData(prevLoginData =>({
            ...prevLoginData,
            [event.target.name] : event.target.value
        }))
    }

    function handleLoginClick(){

    }

    return(
        <form onSubmit={handleLoginClick}>
            <input 
                type="email" 
                placeholder="Enter email"  
                name="loginEmail"
                value={loginData.loginEmail}
                onChange={handleLoginChange}
            />
            <input 
                type="password" 
                placeholder="Enter password"
                name="loginPassword"
                value={loginData.loginPassword}
                onChange={handleLoginChange}
            />
            <Link to={'/home'} >
                <button type="submit">Login</button>
            </Link>
        </form>
    )
}