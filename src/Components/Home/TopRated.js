import React, { useState } from 'react'
import Titles from '../Titles'
import {BsBookmarkStarFill} from 'react-icons/bs'
import { Autoplay, Navigation } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Songs} from "../../Data/MusicData"
function TopRated() {
  const [nextEl, setNextEl] = useState(null)
  const [prevEl, serPrevEL] = useState(null)
  return (
    <div className='my-16'>
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className='mt-10'>
        <Swiper navigation={{nextEl,prevEl}} 
        slidesPerView={4} 
        spaceBetween={40} autoplay={true} 
        speed={1000}
        loop={true}
        modules={[Navigation,Autoplay]}>
          {
            Songs.map((song,index)=>(
              <SwiperSlide>
                <div className='p-4 h-rate border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={`/images/songs/${song.TitleImage}`} alt={song.name} className='w-full h-full objext-cover rounded-lg'/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default TopRated
