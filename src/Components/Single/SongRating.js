import React, { useState } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Message, Select } from '../UsedInputs'
import Stars from '../Stars'
import { UserData } from '../../Data/MusicData'
import { useRecoilValue } from 'recoil'
import { isLoginAtom, tokenAtom } from '../../Screens/Login.state'
import axios from 'axios'
function SongRating({song, fetchData}) {
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
  const isLogin = useRecoilValue(isLoginAtom);
  const token = useRecoilValue(tokenAtom);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState();
  const [message, setMessage] = useState('');

  async function addreview() {
    if (!isLogin) return;
    const config = {
      headers: { 'Authorization' : `Bearer ${token}` }
    };
    const data = {
      comment: review,
      rating: rating
    }
    await axios.post('http://localhost:8000/api/music/review/'+song._id, data, config)
    .then((response) => {
      console.log(response.data);
      setMessage(response.data.message);
      fetchData();
    })
    .catch(
      (error) => {
        console.log(error.response.data);
        setMessage(error.response.data.message);
      }
    )
  } 

  return (
    <div className='my-12'>
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2sm:p-20 rounded'>
        {/* write review */}
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 className='text-xl text-text font-semibold'>Review "{song?.title}"</h3>
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
          <Message label="Message" placeholder="Write Here" onChange={e=>setReview(e.target.value)}/>
          {/* submit */}
          <button onClick={addreview} className='bg-subMain text-white py-3 w-full flex-colo rounded'>Submit</button>
          {message && <p>{message}</p>}
        </div>

        {/* Reviewers */}
        <div className='col-span-3 flex flex-col gap-6'>
          <div className='text-xl text-text font-semibold'> Reviews ({song.numberOfReviews})</div>
          <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
            {
              song.reviews?.map((review,i) => (
                <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800'>
                  <div className='col-span-2 bg-main hidden md:block'>
                    <img src={`/images/user.png`} alt={review.userName} className='w-full h-24 rounded-lg object-cover'/>
                  </div>
                  <div className='col-span-7 flex flex-col gap-2'>
                    <h2>{review?.userName}</h2>
                    <p className='text-xs leading-6 font-medium text-text'>{review?.comment}</p>
                  </div>
                  {/* rates */}
                  <div className='col-span-3 flex-rows border-l border-border text-xs gap-1 text-star'>
                    <Stars value={review?.rating} />
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
