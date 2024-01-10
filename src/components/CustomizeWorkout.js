import React, { useState, useEffect } from 'react'
import crossicon from './assets/icons/crossicon.png'
import "./styles/CustomizeWorkout.css"
import CustomSelect from './CustomSelect'
function CustomiseWorkout() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  
  return (
    <div className='bg-[#141414] h-[100vh] w-full z-[1000] fixed top-0 flex flex-col justify-start items-center'>
        <img src={crossicon} alt="crossicon" className='w-[26px] h-[26px] absolute top-5 right-4'/>
        <h2 className='heading mt-[35px]'>Customize your workout</h2>
        <CustomSelect options={options}/>
        <CustomSelect options={options}/>
        <CustomSelect options={options}/>
        <CustomSelect options={options}/>
    </div>
  )
}

export default CustomiseWorkout