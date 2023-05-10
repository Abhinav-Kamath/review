import React from 'react'
import { Input, Message, Select } from '../../../Components/UsedInputs'
import SideBar from '../SideBar'
import Uploader from '../../../Components/Uploader'
import { CategoriesData } from '../../../Data/CategoriesData'
import { UserData } from '../../../Data/MusicData'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'
import { useRecoilValue } from 'recoil'
import { tokenAtom } from '../../Login.state'
import { useState } from 'react'
import axios from 'axios'

function AddMusic() {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [language, setLanguage] = useState('');
    const [year, setYear] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [category, setCategory] = useState('');
    const [artist, setArtist] = useState('');
    const [message, setMessage] = useState('');

    const token = useRecoilValue(tokenAtom);
    const config = {
        headers: { 'Authorization' : `Bearer ${token}` }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        title,
        duration,
        language,
        year,
        lyrics,
        artist,
        genre : category,
      };
      axios.post('http://localhost:8000/api/music', data, config)
      .then((response) => {
        console.log(response.data);
        setMessage("Song Added Successfully");
      })
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {  
        setMessage(error.response.data.message);
      })
    }

    return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold text-white'>Add Song</h2>
            <div className='w-full grid md:grid-cols-2 gap-6'>
                <Input label="Song Title" placeholder="Song Title" type="text" bg={true} onChange={e=>setTitle(e.target.value)}/>
                <Input label="Duration" placeholder="Duration" type="text" bg={true} onChange={e=>setDuration(e.target.value)}/>
            </div>
           
            <div className='w-full grid md:grid-cols-2 gap-6'>
                <Input label="Language" placeholder="Language" type="text" bg={true} onChange={e=>setLanguage(e.target.value)}/>
                <Input label="Year" placeholder="Year" type="number" bg={true} onChange={e=>setYear(e.target.value)}/>
            </div>

            <div className='w-full grid md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-border font-semibold text-sm'> Image</p>
                    <Uploader/>
                    {/* <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                        <img src="/images/songs/99.jpg" alt="" className='w-full h-full object-cover rounded'/>
                    </div> */}
                </div>
                <Input label="Artist" placeholder="Artist" type="text" bg={true} onChange={e=>setArtist(e.target.value)}/>
               
            </div>
            <Message label="Lyrics" placeholder="Enter the Lyrics" onChange={e=>setLyrics(e.target.value)}/>
            <div className='twext-sm w-full'>
                <Select label="Movie Category" options={CategoriesData} onChange={e=>setCategory(e.target.value)}/>
            </div>
            {/* <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
                <button className='w-full py-4 bg-main border border-subMain border-dashed text-white rounded'>
                    Add Cast
                    <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 sm:grid-cols-4'>
                        {UserData.map((user,i) => (
                            <div key={i} className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'>
                                <img src={`/images/${user.image? user.image : "user.png"}`} alt={user.name} className=' w-ull h-24 object-cover rounded mb-2'/>
                                <p>{user.name}</p>
                                <div className='flex-rows mt-2 w-full gap-2'>
                                    <button className='w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded'>
                                        <MdDelete/>
                                    </button>
                                    <button className='w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded'>
                                        <FaEdit/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </button>
            </div> */}
            <div className='flex justify-end items-center my-4'>
                <button onClick={handleSubmit} className='bg-subMain py-4 font-medium transitions hover:bg-dry flex-rows gap-4 border border-subMain text-white w-full'>
                    <ImUpload/> Add Song
                </button>
            </div>
            {message && <p>{message}</p>}
        </div>
    </SideBar>
  )
}

export default AddMusic
