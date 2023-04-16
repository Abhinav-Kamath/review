import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Songs } from '../Data/MusicData'
import SongInfo from '../Components/Single/SongInfo'
import SongCast from '../Components/Single/SongCast'
import SongRating from '../Components/Single/SongRating'

function SingleMusic() {
    const {id} = useParams()
    const song = Songs.find((song) => song.name === id)
  return (
    <Layout>
      <SongInfo song={song}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <SongCast/>
        {/* ratings */}
        <SongRating song={song}/>
      </div>
    </Layout>
  )
}

export default SingleMusic
