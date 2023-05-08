import React, { useState } from 'react'
import SideBar from '../SideBar'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import { CategoriesData } from '../../../Data/CategoriesData'
import CategoryModal from '../../../Modals/CategoryModal'

function Categories() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <SideBar>
        <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <div className='flex flex-col gap-6'>
           <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold'>Categories</h2>
            <button onClick={()=> setModalOpen(true)} className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white px-4 py-2 rounded'>
                <HiPlusCircle/> Create
            </button>
           </div>
           <Table2 data={CategoriesData} users={false}/>
        </div>
    </SideBar>
  )
}

export default Categories
