/* import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import './FormStyles.css';

function Form() {

/* ****************** EMAILJS ****************** */

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_ybs2eza', 'template_v50dggr', form.current, 'xgSl7VHnan-R_F5N1').then(
    (result) => {
      console.log(result.text)
      console.log('message envoyé')
    },
    (error) => {
      console.log(error.text)
      console.log('message non envoyé')
    }
  )

  return {
    /* <div className="form">
		<form ref={form} onSubmit={sendEmail} >
		
      		<label htmlFor="name">Votre Nom</label>
      		<input type="text"
			 name="user_name"
			 placeholder="Votre Nom">
			
		
	  		<label htmlFor="phone">Téléphone</label>
      		<input type="phone"
			 name="user_phone"
			 placeholder="0625172339">

		
      		<label htmlFor="mail">Email</label>
      		<input type="email"
			 name="user_email"
			 placeholder="votremail@email.com">
			
		
      		<label htmlFor="message">Message</label>
      		<textarea name="message"
			placeholder="Entrez votre message..." >
			
			<button type='submit'
         	 className='btn'
			 id="btn-submit">
   		 </form>
			
	</div> */
  }
}

export default Form
