import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import PopularMusic from '../Components/Home/PopularMusic'
import TopRated from '../Components/Home/TopRated'
import Promos from '../Components/Home/Promos'
import { SearchTextAtom } from '../Layout/navbar/NavBar.state'
import { useRecoilValue, useRecoilState } from 'recoil'
import Musics from '../Components/Musics'
import { Songs } from '../Data/MusicData'
import axios from 'axios'
import { useEffect, useState } from 'react'

function HomeScreen() {
  const SearchText = useRecoilValue(SearchTextAtom);
  const [SongsData, setSongsData] = useState([]);
  function fetchData() {
    axios.get('http://localhost:8000/api/music',
    {
      params: {
        search: SearchText,
      }
    })
    .then((response) => {
      console.log(response.data);
      setSongsData(response.data);
    })
  }
  useEffect(() => {
    fetchData();
  }, [SearchText]);
  if(SearchText!=""){
    return (
      <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {SongsData.music?.map((song, index) => (
        <Musics key={index} song={song}/>
      ))}
      </div>
      </div>
      </Layout>
    )
  }
  else{
    return (
      <Layout>
        <div className='container mx-auto min-h-screen px-2 mb-6'>
          <Banner/>
          <PopularMusic/>
          <TopRated/>
        </div>
      </Layout>
      
    )
  }
}

export default HomeScreen
