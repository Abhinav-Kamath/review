import React from 'react'
import {Autoplay} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
function Banner() {
  return (
    <div className='relative w-full'>
      <Swiper direction="vertical" 
      spaceBetween={0} 
      slidesPerView={1} 
      speedd={1000}
      moduless={[Autoplay]}
      loop={true} autoplay={{delay:4000, disableOnInteraction:false}}
      className='w-full xl:h-96 bg-dry lg:h-64 h-48'>

      </Swiper>
    </div>
  )
}

export default Banner
