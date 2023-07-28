import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/avatar1.jpg'
import AV2 from '../../assets/avatar2.jpg'
import AV3 from '../../assets/avatar3.jpg'
import AV4 from '../../assets/avatar4.jpg'

// import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
// const swiper = new Swiper(...);

// import {Swiper, SwiperSlide} from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const data = [
    {
      avatar: AV1,
      name: 'Client 1 Name',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },{
      avatar: AV2,
      name: 'Client 2 Name',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },{
      avatar: AV3,
      name: 'Client 3 Name',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },{
      avatar: AV4,
      name: 'Client 4 Name',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
  return (
    <section id='testimonials'>
      <h5>What they say about me</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {
          data.map((item, index) => {
            return (
              
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={item.avatar} alt="av1" />
                </div>
                <h5 className='client__name'>{item.name}</h5>
                <small className='client__review'>{item.review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials 