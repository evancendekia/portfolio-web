import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0u9cwfq', 'template_ggo7pp8', form.current, 'RcRN0iVqeBhY85iY-')
    .then((result) => {
        // console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@evancendekia.com</h5>
            <a href='mailto:contact@evancendekia.com' target='_blank'>Send a message</a>
          </article>
        <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>(+62)852 8448 2911</h5>
            <a href='https://wa.me/+6285284482911?text=Hi%20Evan,%20I%20got%20your%20WhatsApp%20from%20your%20website' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact