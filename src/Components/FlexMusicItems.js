import React from 'react'
import { FaRegCalendarAlt, FaStar } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'

function FlexMusicItems({song}) {
  return (
    <>
      <div className='flex items-center gap-2'>
        <FaStar className='text-subMain w-3 h-3'/>
        <span className='text-sm font-medium'>{song.rating}</span>
      </div>
      <div className='flex items-center gap-2'>
        <FaRegCalendarAlt className='text-subMain w-3 h-3' />
        <span className='text-sm font-medium'>{song.year}</span>
      </div>
      <div className='flex items-center gap-2'>
        <BiTime className='text-subMain w-3 h-3' />
        <span className='text-sm font-medium'>{song.duration}</span>
      </div>
    </>
  )
}

export default FlexMusicItems
