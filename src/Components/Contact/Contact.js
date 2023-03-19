import React, { useState } from 'react';
import ContactForm from './ContactForm';
import "./contact.css";

const Contact = () => {

    const initialState = {
    name: "",
    email: "",
    message: ""
}

const [userMessage, setUserMessage] = useState({initialState})

function changeData(e) {
    setUserMessage({...userMessage, [e.taget.name]: e.target.value})
}

  return (
    <div className='Contact' id="Contact">
        <div className='ContactLeftColumn'>
          <div className='BlackBox'>
            <p className='ContactHighlighText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem felis, fringilla a diam nec.</p>
          </div>
      </div>  
      <div className='ContactRightColumn'>
      <h2 id='ContactTitle'>Let's talk!</h2>
        <p>Lorem ipsum alea jacta est dolor sit dolor aemet.</p>
        <ContactForm userMessage={userMessage} handleChangeData={changeData}></ContactForm>
      </div>
    </div>
  )
}

export default Contact