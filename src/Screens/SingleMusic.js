import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Songs } from '../Data/MusicData'
import SongInfo from '../Components/Single/SongInfo'
import SongCast from '../Components/Single/SongCast'
import SongRating from '../Components/Single/SongRating'
import Titles from '../Components/Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Musics from '../Components/Musics'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SingleMusic() {
    const {id} = useParams()
    const [SongData, setSongData] = useState([]);
    function fetchData() {
      axios.get('/api/music/song/'+id)
      .then((response) => {
        console.log(response.data);
        setSongData(response.data);
      })
    }
    useEffect(() => {
      fetchData();
    }, []);
    // const RelatedSongs = Songs.filter((son) => son.category === song.category)
  return (
    <Layout>
      <SongInfo song={SongData}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        {/* <SongCast/> */}
        {/* ratings */}
        <SongRating song={SongData} fetchData={fetchData}/>
        {/* related */}
        <div className='my-16'>
            <Titles title="Related Songs" Icon={BsCollectionFill} />
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* {RelatedSongs?.map((song, index) => (
            <Musics key={index} song={song} />
          ))} */}
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleMusic
