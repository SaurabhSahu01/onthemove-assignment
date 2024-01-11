import React from 'react'
import "./MovementsLayout.css";
import MovementsSwiper from './MovementsSwiper';
function MovementsLayout({ children }) {
  return (
    <div className='movementsLayoutContainer'>
      <div className='w-full pb-[85px]'>
        {children}
      </div>
      <MovementsSwiper/>
    </div>
  )
}

export default MovementsLayout