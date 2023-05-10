import React from 'react'
import Titles from '../Titles'
import Musics from '../Musics'
import {BsCollectionFill} from 'react-icons/bs'
import { Songs } from '../../Data/MusicData'
import { useEffect, useState } from 'react'
import axios from 'axios'
function PopularMusic() {
  const [SongsData, setSongsData] = useState([]);
    function fetchData() {
      axios.get('http://localhost:8000/api/music/random')
      .then((response) => {
        console.log(response.data);
        setSongsData(response.data);
      })
    }
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='my-16'>
      <Titles title="Popular Songs" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          SongsData?.slice(0,4).map((song,index)=>(
            <Musics key={index} song={song} />
          ))
        }
      </div>
    </div>
  )
}

export default PopularMusic
