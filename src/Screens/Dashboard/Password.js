import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../Components/UsedInputs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../Login.state';

function Password() {
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [renewpassword, setRe] = useState('');

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const nav = useNavigate();
  const token = useRecoilValue(tokenAtom);

  const handleSubmit= async (e) => {
    setError('');
    setMessage('');
    e.preventDefault();
    if(newpassword === renewpassword){
      const data = { oldPassword : password, newPassword : newpassword };
      const config = {
        headers: { 'Authorization' : `Bearer ${token}` }
      };
      axios.put('/api/users/password', data , config)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.log(error)
        setError(error.response.data.message);
      });
    }
   else{
    setError("Password doesn't match");
   }
  }
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold text-white'>Change Password</h2>
            <Input label="Old Password" placeholder="" type="password" bg={true} onChange={e=>setPassword(e.target.value)}/>
            <Input label="New Password" placeholder="" type="password" bg={true} onChange={e=>setNewpassword(e.target.value)}/>
            <Input label="Confirm Password" placeholder="" type="password" bg={true} onChange={e=>setRe(e.target.value)}/>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <div className='flex justify-end items-center my-4'>
                <button onClick={handleSubmit} className='bg-main font-medium transitions hover:bg-subMain flex-rows gap-4 border border-subMain text-white px-6 rounded w-full sm:w-auto py-3'>Change Password</button>
            </div>
        </div>
    </SideBar>
  )
}


export default Password
