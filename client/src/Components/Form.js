import React, { useState } from 'react';

export default function Form({displayForm}){

    const [formData, setFormData] = React.useState({
        firstName : "",
        lastName: "",
        email : "",
        phoneNumber: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        displayForm();
    }

    function handleChange(event){
        setFormData(prevData=>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    return (
      <form autoComplete='off' className="form--wrapper" onSubmit={handleSubmit}>
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
        >Submit</button>
      </form>
    );
}
