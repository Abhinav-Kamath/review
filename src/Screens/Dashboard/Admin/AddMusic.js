import React from 'react'
import { Input, Message, Select } from '../../../Components/UsedInputs'
import SideBar from '../SideBar'
import Uploader from '../../../Components/Uploader'
import { CategoriesData } from '../../../Data/CategoriesData'
import { UserData } from '../../../Data/MusicData'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'

function AddMusic() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold text-white'>Add Song</h2>
            <div className='w-full grid md:grid-cols-2 gap-6'>
                <Input label="Song Title" placeholder="Viggu" type="text" bg={true}/>
                <Input label="Time" placeholder="2min" type="text" bg={true}/>
            </div>
           
            <div className='w-full grid md:grid-cols-2 gap-6'>
                <Input label="Language" placeholder="English" type="text" bg={true}/>
                <Input label="Year" placeholder="2023" type="number" bg={true}/>
            </div>

            <div className='w-full grid md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-border font-semibold text-sm'> Image without Tile</p>
                    <Uploader/>
                    <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                        <img src="/images/songs/99.jpg" alt="" className='w-full h-full object-cover rounded'/>
                    </div>
                </div>
               
            </div>
            <Message label="Description" placeholder="keep it Short"/>
            <div className='twext-sm w-full'>
                <Select label="Movie Category" options={CategoriesData}/>
            </div>
            <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
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
            </div>
            <div className='flex justify-end items-center my-4'>
                <button className='bg-subMain py-4 font-medium transitions hover:bg-dry flex-rows gap-4 border border-subMain text-white w-full'>
                    <ImUpload/> Add Song
                </button>
            </div>
        </div>
    </SideBar>
  )
}

export default AddMusic
