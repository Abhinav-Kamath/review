import React from 'react'
import SideBar from './SideBar'
import Table from '../../Components/Table'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRecoilValue, useRecoilState } from 'recoil'
import {tokenAtom} from '../Login.state'
import { FavDataAtom } from './Favorites.state'
function FavoritesMusic() {
  const token = useRecoilValue(tokenAtom);
  const config = {
    headers: { 'Authorization' : `Bearer ${token}` }
  };
  const [FavData, setFavData] = useRecoilState(FavDataAtom);
  async function delData() {
    await axios.delete('http://localhost:8000/api/users/favorites',  config)
    .then((response) => {
      setFavData([]);
      console.log(response.data);
    })
  }
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
           <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold'>Favorite Songs</h2>
            <button onClick={delData} className='bg-main font-medium transitions hover:bg-subMain flex-rows gap-4 border border-subMain text-white px-6 rounded'>
                Delete All
            </button>
           </div>
           <Table data={FavData} admin={false}/>
        </div>
    </SideBar>
  )
}

export default FavoritesMusic
