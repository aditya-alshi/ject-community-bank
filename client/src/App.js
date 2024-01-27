import React from 'react';
import Form from './Components/Form';
import Home from './Components/Home'

export default function App(){

  const [displayForm, setDisplayForm] = React.useState(true)
  
  function handleSubmitAtForm(){
    setDisplayForm(false)
  }

  return(
    <div className="main--wrapper">
    
      {displayForm
      ?
      <Form displayForm={()=>{handleSubmitAtForm()}}/>
      :
      <Home />
    }
      
    </div>
  )
}