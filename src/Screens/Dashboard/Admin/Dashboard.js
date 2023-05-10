import React from 'react'
import SideBar from '../SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import Table from '../../../Components/Table'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useRecoilValue} from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isAdminAtom, tokenAtom, isLoginAtom } from '../../Login.state'

function Dashboard() {


    const DashboardData =[
        {
            bg:"bg-orange-600",
            icon : FaRegListAlt,
            title : "Total songs",
            total :100,
        },
        {
            bg:"bg-blue-700",
            icon : HiViewGridAdd,
            title : "Total categories",
            total :5,
        },
        {
            bg:"bg-green-600",
            icon : FaUser,
            title : "Total Users",
            total :5,
        },

    ]

    const token = useRecoilValue(tokenAtom);
    const config = {
      headers: { 'Authorization' : `Bearer ${token}` }
    };
    const [SongsData, setSongsData] = useState([]);
  
    async function fetchData() {
        const response = await axios.get('http://localhost:8000/api/music/random', config)
        const result = await response.data;
        setSongsData([...result]);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
    <SideBar>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
                DashboardData.map((data,index) => (
                    <div key={index} className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'>
                        <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
                            <data.icon />
                        </div>
                        <div className='col-span-3'>
                            <h2>{data.title}</h2>
                            <p className='mt-2 font-bold'>{data.total}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <h3 className='text-md font-medium my-6'>Recent songs</h3>
        <Table data={SongsData.slice(0,4)} admin={true}/>
    </SideBar>
  )
}

export default Dashboard
