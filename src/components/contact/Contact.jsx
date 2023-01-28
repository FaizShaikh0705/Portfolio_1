import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useForm} from '@formspree/react'; 

function ContactForm() {
  const [state, handleSubmit] = useForm("xdovkrvd");
  if (state.succeeded) {
      return <section className="thankyou"><h2>Thanks for joining!</h2></section>;
  }
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'

// const Contact = () => {
  // const form = useRef();
  
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  //   e.target.reset()
  // };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container  contact__container">
      <div className="contact___options">
       <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>Faizshaikh0705@gmail.com</h5>
        <a href="mailto:Faizshaikh07052gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
       </article>

       <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Massenger</h4>
        <h5>Faiz Shaikh</h5>
        <a href="https://m.me/profile.php?id=100056026290106" target='_blank' rel="noopener noreferrer">Send a message</a>
       </article>

       <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+918291298104</h5>
        <a href="https://api.whatsapp.com/send?phone=+918291298104" target='_blank' rel="noopener noreferrer">Send a message</a>
       </article>
      </div>
      
      {/* <form ref={form} onSubmit={sendEmail}> */}
      
        <form action="https://formspree.io/f/xdovkrvd" method='post' onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary' disabled={state.submitting}>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default ContactForm
