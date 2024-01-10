import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Layout({children}) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
  return (
    <div className='min-h-screen w-full'>
        <div className='w-full mb-[78px]'>
            {children}
        </div>
        <Navbar currentPageIndex={currentPageIndex} setCurrentpageIndex={setCurrentPageIndex}/>
    </div>
  )
}

export default Layout