import React from 'react'
import {Autoplay} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Songs} from "../../Data/MusicData"
import FlexMusicItems from '../FlexMusicItems';
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';


function Banner() {
  return (
    <div className='relative w-full'>
      <Swiper direction="vertical" 
      slidesPerView={1} 
      speed={1000}
      moduless={[Autoplay]}
      loop={true} autoplay={{delay:4000, disableOnInteraction:false}}
      className='w-full xl:h-96 bg-dry lg:h-64 h-48'>
        {
            Songs.slice(0,6).map((song,index)=>(
              <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                <img src={`/images/songs/${song.Image}`} alt={song.name} className="w-full h-full object-cover"/>
              <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                <h1 className='xl:test-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                  {song.name}
                </h1>
                <div className='flex gap-5 items-center text-dryGray'>
                  <FlexMusicItems song={song}/>
                </div>
                <div className='flex gap-5 items-center'>
                  <Link to={`/song/${song.name}`} className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xl'>
                    Listen Now
                  </Link>
                  <button className='bg-white hover:text-subMain transitions text-white px-4 py-4 rounded text-sm bg-opacity-30'>
                    <FaHeart />
                  </button>
                </div>
              </div>
              </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Banner
