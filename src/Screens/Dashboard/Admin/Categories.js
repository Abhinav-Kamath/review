import React from 'react'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'
import { Songs } from '../../../Data/MusicData'
import { HiPlusCircle } from 'react-icons/hi'

function Categories() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
           <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold'>Categories</h2>
            <button className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white px-4 py-2 rounded'>
                <HiPlusCircle/> Create
            </button>
           </div>
           <Table data={Songs} admin={true}/>
        </div>
    </SideBar>
  )
}

export default Categories
