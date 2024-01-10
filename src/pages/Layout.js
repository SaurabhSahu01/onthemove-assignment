import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import "../pages/Layout.css"
function Layout({children}) {
  return (
    <div className='layoutContainer '>
        <div className='w-full mb-[78px]'>
            {children}
        </div>
        <Navbar/>
    </div>
  )
}

export default Layout