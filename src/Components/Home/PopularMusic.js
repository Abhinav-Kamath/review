import React from 'react'
import Titles from '../Titles'
import Musics from '../Musics'
import {BsCollectionFill} from 'react-icons/bs'
import { Songs } from '../../Data/MusicData'

function PopularMusic() {
  return (
    <div className='my-16'>
      <Titles title="Popular Songs" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          Songs.slice(0,8).map((song,index)=>(
            <Musics key={index} song={song} />
          ))
        }
      </div>
    </div>
  )
}

export default PopularMusic
