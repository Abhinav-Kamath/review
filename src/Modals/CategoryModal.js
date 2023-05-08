import React from 'react'
import MainModal from './MainModal'
import {Input} from "../Components/UsedInputs"
import { HiPlusCircle } from 'react-icons/hi'

function CategoryModal({modalOpen, setModalOpen}) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div classname="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white">
        <h2 className='text-3xl font-bold'> Create </h2>
        <from className="flex- flex-col gap-6 text-left mt-6">
        <Input label="Category Name" placeholder="action" type="text" bg={false} />
        <button onClick={() => setModalOpen(false)} className='w-full flex-rows gap-4 transitions hover:bg-dry border-2 border-subMain font-bold py-3 text-white'>
        <HiPlusCircle/> Add
        </button>
      </from>
      </div>
    </MainModal>
  )
}

export default CategoryModal
