import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import './testimonial.css'
import Data from './Data'

const Testimonials = () => {
  return (
 <section className="testimonial container section " id='testimonials'>
     <h2 className="section__title">My Client say</h2>
    <span className="section__subtitle">Testimonial</span>

    <Swiper className="testimonial__container"
       loop={true}
       grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
    
        }}
        modules={[Pagination]}
    >
        {Data.map(({id,image,title,description})=>{return(
            <SwiperSlide 
             
            key={id} className="testimonial__card ">
            <img src={image} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
        </SwiperSlide>
    )})}


    </Swiper>
 </section>
  )
}

export default Testimonials
