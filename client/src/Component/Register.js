import { Form, redirect, useActionData } from 'react-router-dom';

export const action = async ({ request })=>{
    try{

        const formData = await request.formData();
        const body = Object.fromEntries(formData)
        // console.log(body)
        await fetch('http://localhost:9000/registerPerson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        
        return redirect('/home');
    }catch(err){
        return err.message;
    }
}

export default function Register(){

    // const uri = 'https://jectcommunitybank.onrender.com/submit'
        // const uri = 'http://localhost:9000/registerPerson'

        const actionData = useActionData();

        if(actionData){
            console.log(actionData.message)
        }

    return(
        <div className="register--wrapper">
            <Form method='post' className='register--form' replace>
                <p className="register--heading">Register</p>
                <input name='firstName' className='register--form--elements' type="text" placeholder='First Name' />
                <input name='lastName' className='register--form--elements' type="text" placeholder='Last Name' />
                <input name='email' className='register--form--elements' type="email" placeholder='Email' />
                <input type="tel" name="phoneNumber" className='register--form--elements' placeholder='Phone Number' />
                <input name='password' className='register--form--elements' type="password" placeholder='password' />
                <button className='register--form--elements register--form--submit--button'type='submit'>Register</button>
            </Form>
        </div>
    )
}