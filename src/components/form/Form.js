import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import './FormStyles.css';

function Form() { 

	// const [validation, setValidation] = useState();

	// EmailJS
    const form = useRef();
	const {handleSubmit, register, formState : {errors}} = useForm()
	function onSubmit(data) {
		console.log(data)
	}
	
	const sendEmail = (e) => {

	  e.preventDefault(); 

	  emailjs
	  .sendForm(
		'service_ybs2eza',
		'template_v50dggr',
		form.current,
		'xgSl7VHnan-R_F5N1'
		)
		.then((result) => {
			console.log(result.text)
			console.log("message envoyé");
			<h1>Votre message est envoyé</h1>
		}, (error) => {
			console.log(error.text)
			console.log("message non envoyé");
		}); 

		if (sendEmail) {
			document.location.href='/';
			alert('Merci, Votre message a été bien envoyé et sera traîté dans les meilleurs délais')
		}

	}


	return (
		
	<div className="form">
		<form ref={form} onSubmit={sendEmail}>
		
			{/* Name */}
      		<label htmlFor="name">Votre Nom</label>
      		<input type="text"
			 name="user_name"
			 placeholder="Votre Nom et prénom"
			 required />
			
			{/* Phone */}
	  		<label htmlFor="phone">Téléphone</label>
      		<input type="phone"
			 name="user_phone"
			 placeholder="0625172339" />

			{/* Mail */}
      		<label htmlFor="mail">Email</label>
      		<input type="email"
			 name="user_email"
			 placeholder="votremail@email.com"
			 required />
			
			{/* Message */}
      		<label htmlFor="message">Message</label>
      		<textarea name="message"
			placeholder="Entrez votre message..."
			required />
			
			{/* Submit */}
			<button type='submit'
         	 className='btn'
			 >Envoyer</button>
   		 </form>
			
	</div>
	)
}

export default Form;