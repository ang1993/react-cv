import React from 'react'
import "./contact.css";

const ContactForm = ({userMessage, handleChangeData}) => {
  return (
    <div>
        <form>
            <fieldset>
                <label for="name"></label>
                <input id="name" placeholder='Name' type={'text'} name="name" defaultValue={userMessage.name} onChange={handleChangeData}></input>
            </fieldset>
            <fieldset>
                <label for="email"></label>
                <input id="email" placeholder='Email' type={'email'} name="email" defaultValue={userMessage.email} onChange={handleChangeData}></input>
            </fieldset>
            <fieldset>
                <label for="message"></label>
                <input id="message" placeholder="Your message" type={'textarea'} name="message" defaultValue={userMessage.message} onChange={handleChangeData}></input>
            </fieldset>
            <button className='FormButton' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm