import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mockups/Arunika Terang Indonesia.png'
import IMG2 from '../../assets/mockups/Ayo Tryout.png'
import IMG3 from '../../assets/mockups/AITI-LOG.png'
import IMG4 from '../../assets/mockups/TPS Online.png'
import IMG5 from '../../assets/mockups/SIATEK.png'
import IMG6 from '../../assets/mockups/AITI KURIR.png'
import IMG7 from '../../assets/mockups/Wedding Invitation.png'
import IMG8 from '../../assets/mockups/AME-R.png'

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Company Profile',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 2,
      image: IMG2,
      title: 'Quiz test application',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 3,
      image: IMG3,
      title: 'Logistic handling system',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 4,
      image: IMG4,
      title: 'Manifes data reporting system',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 5,
      image: IMG5,
      title: 'Academic system information',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 6,
      image: IMG6,
      title: 'Delivery handling system',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 7,
      image: IMG7,
      title: 'Wedding Invitation',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    },{
      id: 8,
      image: IMG8,
      title: 'Aviation Monitoring Equipment & Report',
      // github: 'https://github.com',
      // demo: 'https:dribbble.com'
    }
    
  ]

  return (
    <section id='portfolio'>
      <h5>My Recet Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {
        data.map(item => {
          return(
            <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title}/>
              </div>
              <h3>{item.title}</h3>
              {/* <div className="portfolio__item-cta">
                <a href={item.github} className='btn'>Github</a>
                <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div> */}
            </article>
          )
        })
       }

      </div>
    </section>
  )
}

export default Portfolio