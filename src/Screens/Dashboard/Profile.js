import React from 'react'
import SideBar from './SideBar'
import Uploader from '../../Components/Uploader'
import { Input } from '../../Components/UsedInputs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { tokenAtom , idAtom, isLoginAtom} from '../Login.state';

function Profile() {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('');
  const token = useRecoilValue(tokenAtom);
  const id = useRecoilValue(idAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, fullname };
    const config = {
      headers: { 'Authorization' : `Bearer ${token}` }
    };
    axios.put('http://localhost:8000/api/users/', data, config)
    .then((response) => {
      console.log(response.data);
      setMessage("Profile Updated");
    })
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      setMessage(error.response.data.message);
    });
  }


  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold text-white'>Profile</h2>
            <Uploader/>
            <Input label="FullName" placeholder="Enter your name" type="text" bg={true} onChange={e=>setFullname(e.target.value)}/>
            <Input label="Email" placeholder="Enter your email" type="email" bg={true} onChange={e=>setEmail(e.target.value)}/>
            {/* <div className='flex flex-row gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
                <button onClick={handleDelete} className='bg-subMain font-medium transitions hover:bg-main flex-rows gap-4 border border-subMain text-white px-6 rounded w-full sm:w-auto py-3'>Delete Account</button>
            </div> */}
            <div className='flex justify-end items-center my-4'>
                <button onClick={handleSubmit} className='bg-Main font-medium transitions hover:bg-subMain flex-rows gap-4 border border-subMain text-white px-6 rounded w-full sm:w-auto py-3'>Update</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    </SideBar>
  )
}

export default Profile
