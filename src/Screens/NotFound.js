import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
        <img className='w-full h-96 object-contain' src="/images/404.png" alt="not found"/>
        <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
        <p className='font-medium text-border italic leading-6'>This page does not exist. Please check your URL</p>
        <Link to="/" className='bg-subMain text-white font-medium py-2 px-4 rounded-md'>Go To Home </Link>
      </div>
    </div>
  )
}

export default NotFound
