import React from 'react'
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { GoEye } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase "
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3"
const Rows = (song,i,admin)  => {
    return(
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>

                    <img className='h-full w-full object-cover' src={`/images/songs/${song.titleImage}`} alt={song?.name}/>
                </div>
                
            </td>
            <td className={`${Text} truncate`}>{song.name}</td>
            <td className={`${Text}`}>{song.category}</td>
            <td className={`${Text}`}>{song.language}</td>
            <td className={`${Text}`}>{song.year}</td>
            <td className={`${Text}`}>{song.time}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
                {
                    admin === true ? (
                        <>
                        <button className='border bg-dry flex-rows gap-2 text-border py-1 px-2 border-border rounded'>
                        Edit <FaEdit className='text-green-500'/>
                        </button>
                        <button className='bg-subMain text-white rounded flex-colo w-7 h-7'> <MdDelete /></button>
                        </>
     ) : (
     <><button className='border bg-dry flex-rows gap-2 text-border py-1 px-2 border-border rounded'>
     Edit <FaCloudDownloadAlt className='text-green-500'/>
     </button>
     <Link to={`/song/${song?.name}`} className='bg-subMain text-white rounded flex-colo w-7 h-7'> <GoEye /></Link></>
     
     
     )

                    
                }
               
            </td>
            
        </tr>
    )
}

function Table({data, admin}) {
    
    


  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className='w-full table-auto border border-border divide-y divide-border'>
        <thread>
            <tr className='bg-dryGray w-full'>
                <th scope='col' className={`${Head}`}> Image</th>
                <th scope='col' className={`${Head}`}> Name</th>
                <th scope='col' className={`${Head}`}> Category</th>
                <th scope='col' className={`${Head}`}> Language</th>
                <th scope='col' className={`${Head}`}> Year</th>
                <th scope='col' className={`${Head}`}> Time</th>
                <th scope='col' className={`${Head} text-end`}> Actions</th>
            </tr>
            <tbody className='bg-msin divide-y divide-gray-800'>
                    {data.map((song, index) => Rows(song, index,admin))}
                </tbody>
        </thread>
        
      </table>
    </div>
  )
}

export default Table
