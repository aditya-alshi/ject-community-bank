import React from 'react';

export default function Form(){

    const [formData, setFormData] = React.useState({
        firstName : "",
        lastName: "",
        email : "",
        password: "",
        phoneNumber: ""
    })

    function handleSubmit(event){
        event.preventDefault();

        const uri = 'http://localhost:8000/submit'

        fetch(uri, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err=>{
            console.log("Error: ", err);
        })
    }

    function handleChange(event){
        event.preventDefault();
        setFormData(prevData=>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    return (
      <form className="form--wrapper" onSubmit={handleSubmit} action='/submit' method='POST'>
        <div className="form--header">
            <h3>Register</h3>
            <p>jcbank</p>
        </div>
        <input
          className="form--elements first--name"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <input
          className="form--elements last--name"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          className="form--elements email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input 
            name='password'
            className="form--elements email"
            type="password" 
            value={formData.password}
            placeholder='Enter Password'
            onChange={handleChange}
        />
        <input 
            className="form--elements phone--number"
            type="tel" 
            name="phoneNumber"
            placeholder='Phone number'
            value={formData.phoneNumber}
            onChange={handleChange}
        />
        <button
             type="submit" 
             
             className='form--elements submit--button'
        >Register</button>
      </form>
    );
}
