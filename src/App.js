import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import ContactUs from './Screens/ContactUs'
import SongsPage from './Screens/Music'
import SingleMusic from './Screens/SingleMusic'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Profile from './Screens/Dashboard/Profile'
import Password from './Screens/Dashboard/Password'
import FavoritesMusic from './Screens/Dashboard/FavoritesMusic'
import SongsList from './Screens/Dashboard/Admin/SongsList'
import Dashboard from './Screens/Dashboard/Admin/Dashboard'
import Categories from './Screens/Dashboard/Admin/Categories'
import Users from './Screens/Dashboard/Admin/Users'
import AddMusic from './Screens/Dashboard/Admin/AddMusic'

function App() {
  Aos.init()
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/songs' element={<SongsPage/>} />
      <Route path='/song/:id' element={<SingleMusic/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/password' element={<Password/>} />
      <Route path='/favorites' element={<FavoritesMusic/>} />
      <Route path='/songslist' element={<SongsList/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/addsong' element={<AddMusic/>} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    
  )
}

export default App
