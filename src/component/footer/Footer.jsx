import React from 'react'
import './footer.css'
import {BsInstagram,BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Evan Cendekia</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#service'>Service</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.instagram.com/evan.cendekia' target='_blank'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/evan-cendekia' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/evancendekia' target='_blank'><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Evan Cendekia. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer