import React, { useState } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Message, Select } from '../UsedInputs'
import Stars from '../Stars'
import { UserData } from '../../Data/MusicData'

function SongRating({song}) {
  const Ratings =[
    {
      title:"1 - Fair",
      value: 1,
    },
    {
      title:"2 - Good",
      value: 2,
    },
    {
      title:"3 - Fair",
      value: 3,
    },
    {
      title:"4 - Fair",
      value: 4,
    },
    {
      title:"5 - Fair",
      value: 5,
    },

  ]

  const [rating,setRating] = useState()
  return (
    <div className='my-12'>
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2sm:p-20 rounded'>
        {/* write review */}
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 className='text-xl text-text font-semibold'>Review "{song?.name}"</h3>
          <p className='text-sm leading-7 font-medium text-border'>
            Write a review or this song.
          </p>
          <div className='text-sm w-full'>
            <Select label="Rating" options={Ratings} onChange={(e) => setRating(e.target.value)}/>
            <div className='flex mt-4 text-lg gap-2 text-star'>
              <Stars value={rating} />
            </div>
          </div>
          {/* message */}
          <Message label="Message" placeholder="Write Here" />
          {/* submit */}
          <button className='bg-subMain text-white py-3 w-full flex-colo rounded'>Submit</button>
        </div>

        {/* Reviewers */}
        <div className='col-span-3 flex flex-col gap-6'>
          <div className='text-xl text-text font-semibold'> Reviews (56)</div>
          <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
            {
              UserData.map((user,i) => (
                <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800'>
                  <div className='col-span-2 bg-main hidden md:block'>
                    <img src={`/images/${user? user.Image : "user.png"}`} alt={user.name} className='w-full h-24 rounded-lg object-cover'/>
                  </div>
                  <div className='col-span-7 flex flex-col gap-2'>
                    <h2>{user?.name}</h2>
                    <p className='text-xs leading-6 font-medium text-text'>{user?.message}</p>
                  </div>
                  {/* rates */}
                  <div className='col-span-3 flex-rows border-l border-border text-xs gap-1 text-star'>
                    <Stars value={user?.rate} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SongRating
