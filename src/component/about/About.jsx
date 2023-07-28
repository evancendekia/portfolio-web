import React from 'react'
import './about.css'
import PROFILE from '../../assets/profile-about.jpeg'
import {FaAward} from "react-icons/fa"
import {FiUser} from "react-icons/fi"
import {VscFolder} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PROFILE} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon"/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>
          <p>
          I am a full stack developer with 6 years of work experience which covering front end, back end, mobile apps, database, and devops. Had a lot of experience developing various websites and applications that are used internally and externally. I also have skills in electro-mechanics such as robotics and IoT. I am able to work well as a team and have the ability to learn things quickly.
          </p>
          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About