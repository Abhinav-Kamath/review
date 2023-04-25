import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../Components/UsedInputs'

function Password() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold text-white'>Change Password</h2>
            <Input label="Old Password" placeholder="" type="password" bg={true}/>
            <Input label="New Password" placeholder="" type="password" bg={true}/>
            <Input label="confirm Password" placeholder="" type="password" bg={true}/>
            <div className='flex justify-end items-center my-4'>
                <button className='bg-main font-medium transitions hover:bg-subMain flex-rows gap-4 border border-subMain text-white px-6 rounded w-full sm:w-auto py-3'>Change Password</button>
            </div>
        </div>
    </SideBar>
  )
}

export default Password
