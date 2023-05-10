import React from 'react'
import {  FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { tokenAtom } from '../Screens/Login.state';
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase "
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3"

const Rows = ({data,i,users,handleDelete})  => {
    const nav = useNavigate();
    const token = useRecoilValue(tokenAtom);
    // const [UserChange, setUserChange] = useRecoilState(UserChangeAtom);
    return(
        <tr key={i}>
            {
                users ? (
                    <>
                        <td className={`${Text}`}>
                            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>

                                <img className='h-full w-full object-cover' src={`/images/${data.image ? data.image : "user.png"}`} alt={data?.fullName}/>
                            </div>
                        </td>
                        <td className={`${Text}`}>{data?._id ? data?._id : "2R75T8"}</td>
                        <td className={`${Text}`}>{data.createAt ? data.createAt : " 12, May 2023"}</td>
                        <td className={`${Text}`}>{data.fullname}</td>
                        <td className={`${Text}`}>{data.email}</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                        <button onClick={() => handleDelete(data._id)} className='bg-subMain text-white rounded flex-colo w-7 h-7'> <MdDelete /></button>

                        </td>
                        
                    </>
                ):(
                  <>
                    <td className={`${Text} font-bold`}>{data?._id ? data?._id : "2R75T8"}</td>
                    <td className={`${Text}`}>{data.createAt ? data.createAt : " 12, May 2023"}</td>
                    <td className={`${Text}`}>{data.title}</td>
                    <td className={`${Text} float-right flex-rows gap-2`}>
                
                    <button className='border bg-dry flex-rows gap-2 text-border py-1 px-2 border-border rounded'>
                        Edit <FaEdit className='text-green-500'/>
                    </button>
                    <button className='bg-subMain text-white rounded flex-colo w-7 h-7'> <MdDelete /></button>
                    </td>
                </>
                )           
    }       
    </tr>
    )
}

function Table2({data, users, handleDelete}) {

  return (
    <div className='overflow-hidden relative w-full'>
      <table className='table-auto border border-border divide-y divide-border'>
        <thread>
            <tr className='bg-dryGray w-full'>
                {
                    users? (
                        <>
                            <th scope='col' className={`${Head}`}> Image</th>
                            <th scope='col' className={`${Head}`}> Id</th>
                            <th scope='col' className={`${Head}`}> Date</th>
                            <th scope='col' className={`${Head}`}> Full Name</th>
                            <th scope='col' className={`${Head}`}> Email</th>
                        </>
                    ):(
                        <>
                            <th scope='col' className={`${Head}`}> Id</th>
                            <th scope='col' className={`${Head}`}> Date</th>
                            <th scope='col' className={`${Head}`}> Title</th>
                        </>
                    )
                }
                
                <th scope='col' className={`${Head} text-end`}> Actions</th>
            </tr>
            <tbody className='bg-msin divide-y divide-gray-800'>
                
                {data.map(
                    (data, index) => 
                        <Rows data={data} i={index} users={users} handleDelete={handleDelete}/>
                    )}
            </tbody>
        </thread>
        
      </table>
    </div>
  )
}

export default Table2