import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import ContactUs from './Screens/ContactUs'
import SongsPage from './Screens/Music'
import SingleMusic from './Screens/SingleMusic'
import Login from './Screens/Login'
import Register from './Screens/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/songs' element={<SongsPage/>} />
      <Route path='/song/:id' element={<SingleMusic/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route path='/*' element={<NotFound />} />
    </Routes>
    
  )
}

export default App
