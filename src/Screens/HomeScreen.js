import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import PopularMusic from '../Components/Home/PopularMusic'
import TopRated from '../Components/Home/TopRated'
import Promos from '../Components/Home/Promos'

function HomeScreen() {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-6'>
        <Banner/>
        <PopularMusic/>
        <Promos/>
        <TopRated/>
      </div>
    </Layout>
    
  )
}

export default HomeScreen
