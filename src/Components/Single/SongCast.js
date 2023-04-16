import React from 'react'
import Titles from '../Titles'
import { FaUserFriends } from 'react-icons/fa'
import { Autoplay } from 'swiper'
import { Swiper,SwiperSlide } from 'swiper/react'
import { UserData } from '../../Data/MusicData'

function SongCast() {
  return (
    <div className='my-12'>
        <Titles title="Casts" Icon={FaUserFriends}/>
        <div className='mt-10'>
            <Swiper 
            autoplay={{
                delay:1000,
                disableOnInteraction: false,
            }} 
            slidesPerView={4}
            loop={true} 
            speed={1000} 
            modules={[Autoplay]} 
            spaceBetween={10} 
            >
                {
                    UserData.map((user,i) => (
                        <SwiperSlide key={i}>
                            <div className='w-80 h-80 p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                                <img src={`/images/${user.Image}`} alt={user.name} className='w-full h-full object-cover flex-colo rounded mb-4'/>
                                <p>{user?.name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
      
    </div>
  )
}

export default SongCast
