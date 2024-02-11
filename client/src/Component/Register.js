import { Form } from 'react-router-dom';

export default function Register(){
    return(
        <div className="register--wrapper">
            <Form method='post' className='register--form'>
                <p className="register--heading">Register</p>
                <input className='register--form--elements' type="text" placeholder='First Name' />
                <input className='register--form--elements' type="text" placeholder='Last Name' />
                <input className='register--form--elements' type="email" placeholder='Email' />
                <input className='register--form--elements' type="password" placeholder='password' />
                <button  className='register--form--elements register--form--submit--button'type='submit'>Register</button>
            </Form>
        </div>
    )
}