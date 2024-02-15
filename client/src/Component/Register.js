import React from 'react';
import { 
    Link,
    Outlet,
    Form,  
    useActionData, 
} from 'react-router-dom';
// import Login from './Login';

export const action = async ({ request })=>{
    try{
        const formData = await request.formData();
        const body = Object.fromEntries(formData)
        // console.log(body)
        //   const url = 'https://jectcommunitybank.onrender.com/registerPerson'
            const url = 'http://localhost:8000/registerPerson'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const serverMessage = await response.json();
        return serverMessage;
    }catch(err){
        return err.message;
    }
}

export default function Register(){
    const actionData = useActionData();

    if(actionData){
        console.log(actionData.message)
    }
    
    return(
        <div className="register--wrapper">
            <Outlet />
            <Form method='post' className='register--form' replace>
                <p className="register--heading">Register</p>
                <input name='firstName' className='register--form--elements' type="text" placeholder='First Name' />
                <input name='lastName' className='register--form--elements' type="text" placeholder='Last Name' />
                <input name='email' className='register--form--elements' type="email" placeholder='Email' />
                <input type="tel" name="phoneNumber" className='register--form--elements' placeholder='Phone Number' />
                <input name='password' className='register--form--elements' type="password" placeholder='password' />
                <button className='register--form--elements register--form--submit--button'type='submit'>Register</button>
                {actionData && <p className="register--form--elements">
                    {actionData.message} <Link to={'login'} >Login Now</Link>
                </p> }
            </Form>
        </div>
    )
}