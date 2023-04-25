import React from 'react'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'
import { Songs } from '../../../Data/MusicData'

function SongsList() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
           <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold'>Songs List</h2>
            <button className='bg-main font-medium transitions hover:bg-subMain flex-rows gap-4 border border-subMain text-white px-6 rounded'>
                Delete All
            </button>
           </div>
           <Table data={Songs} admin={true}/>
        </div>
    </SideBar>
  )
}

export default SongsList
