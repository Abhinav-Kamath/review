import React from 'react'
import SideBar from '../SideBar'
import Table2 from '../../../Components/Table2'
import { UserData} from '../../../Data/MusicData'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRecoilValue, useRecoilState } from 'recoil'
import {tokenAtom} from '../../Login.state'

function Users() {
  const token = useRecoilValue(tokenAtom);
  const config = {
    headers: { 'Authorization' : `Bearer ${token}` }
  };
  const [UserData, setUserData] = useState([]);
  const [tempChange, setTempChange] = useState(false);

  const handleDelete = async (id) => {
      const response = await axios.delete('/api/users/'+id, config);
      const data = await response.data;
      console.log('Success:', data);
      setTempChange(!tempChange)
  }

  async function fetchData() {
    const response = await axios.get('/api/users/', config)
    const result = await response.data;
    setUserData([...result]);
  }

  useEffect( () => {
    fetchData();
  }, [tempChange]);

  return (
    <SideBar>
  
        <div className='flex flex-col gap-6'>
          
            <h2 className='text-xl font-bold'>Users</h2>
           
           <Table2 data={UserData} users={true} handleDelete={handleDelete} />
        </div>
    
    </SideBar>
  )
}

export default Users
