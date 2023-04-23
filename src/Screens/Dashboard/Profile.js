import React from 'react'
import SideBar from './SideBar'
import Uploader from '../../Components/Uploader'
import { Input } from '../../Components/UsedInputs'

function Profile() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold text-white'>Profile</h2>
            <Uploader/>
            <Input label="FullName" placeholder="Viggu" type="text" bg={true}/>
            <Input label="Email" placeholder="Viggu@gmail.com" type="email" bg={true}/>
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
                <button className='bg-subMain font-medium transitions hover:bg-main flex-rows gap-4 border border-subMain text-white px-6 rounded w-full sm:w-auto py-3'>Delete Account</button>
            </div>
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
                <button className='bg-Main font-medium transitions hover:bg-subMain flex-rows gap-4 border border-subMain text-white px-6 rounded w-full sm:w-auto py-3'>Update</button>
            </div>
        </div>
    </SideBar>
  )
}

export default Profile
