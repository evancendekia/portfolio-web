import React, {useState} from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mockups/Arunika Terang Indonesia.png'
import IMG2 from '../../assets/mockups/Ayo Tryout.png'
import IMG3 from '../../assets/mockups/AITI-LOG.png'
import IMG4 from '../../assets/mockups/TPS Online.png'
import IMG5 from '../../assets/mockups/SIATEK.png'
import IMG6 from '../../assets/mockups/AITI KURIR.png'
import IMG7 from '../../assets/mockups/Wedding Invitation.png'
import IMG8 from '../../assets/mockups/AME-R.png'

import 'animate.css';


const Portfolio = () => {

  const [showDetail, setShowDetail] = useState(false)
  const [showDetailOut, setShowDetailOut] = useState(false)
  const [dataDetail, setDataDetail] = useState({})
  const [showMainList, setShowMainList] = useState(true) 
  const [showMainListIn, setShowMainListIn] = useState(false) 
  const [showMainListOut, setShowMainListOut] = useState(false) 
  const showDetailHandle = (data) => {
    console.log('data',data)
    setDataDetail(data)
    if(showDetail === false){ //open
      setShowMainListOut(true)
      setTimeout(() => {
        setShowMainList(false)
        setShowMainListOut(false)
        setShowMainListIn(true)
        setShowDetail(true)
      }, 500);
    }else if (showDetail === true && dataDetail.id === data.id){ //close
      setShowDetailOut(true)
      setTimeout(() => {
        setShowDetail(false)
        setShowDetailOut(false)
        setShowMainList(true)
        // setShowMainListIn(true)
        setTimeout(() => {
          setShowMainListOut(false)
          setDataDetail({})
        }, 500);
      }, 500);
    }

  }
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
      <div className={`${showDetail ? '' : 'hidden'} ${showDetail ? 'animate__animated animate__fadeInTopLeft' : ''} ${showDetailOut ? 'animate__animated animate__fadeOutTopLeft' : ''}`}>
        <div className={`container portfolio__detail__container `} >
          <article className='portfolio__item__wide '>
            <h2>{dataDetail.title}</h2>
            <hr/>
            <div className="portfolio__item-image">
              <img src={dataDetail.image} alt='Company Profile'/>
            </div>
          </article>
          <article className='portfolio__item__wide'>
            <h2>Project Detail</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, massa eu ullamcorper pretium, dolor ante dignissim libero, eget lobortis erat sem vel odio. Nullam nibh mi, mollis in bibendum in, malesuada vulputate lacus. Aenean ut lobortis elit. Nam non augue neque. Nunc nec sodales ante, sit amet vehicula nulla. Maecenas vulputate, enim non rhoncus fringilla, neque mauris bibendum ex, vel vulputate sapien diam ut lacus. Donec neque est, condimentum laoreet ornare quis, molestie rhoncus tortor. </p>
            <br/>
            <p>Vestibulum ornare risus a ante tristique, quis suscipit nunc tincidunt. Duis auctor molestie euismod. Cras lacinia magna quis lobortis tempus. Duis sit amet imperdiet massa. Aenean porttitor odio mi, eu vestibulum mauris semper eget. Nulla rhoncus lacus id sapien sollicitudin, quis semper dolor interdum. Ut iaculis enim in nisl pellentesque accumsan. Duis ut interdum leo. Mauris ac euismod metus. </p>

          </article>

        </div>
        <div className={'container portfolio__small__container'}>
        {
          data.map(item => {
            return(
              <article className={`portfolio__small__item ${dataDetail.id === item.id ? 'active' : ''}`}  onClick={()=> showDetailHandle(item)}>
                <div className="portfolio__item-image">
                  <img src={item.image} alt={item.title}/>
                </div>
                {showDetail ? (<></>) : (<h3>{item.title}</h3>)}
                
                {/* <div className="portfolio__item-cta">
                  <a href={item.github} className='btn'>Github</a>
                  <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div> */}
              </article>
            )
          })
        }

        </div>

      </div>
      <div className={showMainList ? '' : 'hidden'}>
        <div className={`container portfolio__container ${showMainListOut ? 'animate__animated animate__zoomOut' : ''} ${showMainListIn ? 'animate__animated animate__zoomIn' : ''} `}>
          {/* <article className='portfolio__item__wide'>
            <h2>Company Profile</h2>
            <hr/>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='Company Profile'/>
            </div>
          </article> */}
        {
          data.map(item => {
            return(
              <article className='portfolio__item'  onClick={()=> showDetailHandle(item)}>
                <div className="portfolio__item-image">
                  <img src={item.image} alt={item.title}/>
                </div>
                {showDetail ? (<></>) : (<h3>{item.title}</h3>)}
                
                {/* <div className="portfolio__item-cta">
                  <a href={item.github} className='btn'>Github</a>
                  <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div> */}
              </article>
            )
          })
        }

        </div>

      </div>
    </section>
  )
}

export default Portfolio