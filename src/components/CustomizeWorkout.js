import React, { useState, useEffect } from 'react'
import crossicon from './assets/icons/crossicon.png'
import "./styles/CustomizeWorkout.css"
import CustomSelect from './CustomSelect'
import Button from './Button'

function CustomiseWorkout({setOpenModal}) {
  const [value, setValue] = useState(null);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <div className='bg-[#141414] h-[100vh] w-full z-[1000] fixed top-0 flex flex-col justify-start items-center overflow-y-scroll'>
      <img src={crossicon} alt="crossicon" className='w-[26px] h-[26px] absolute top-5 right-4' onClick={() => setOpenModal(false)}/>
      <h2 className='heading mt-[35px]'>Customize your workout</h2>
      <div className='h-full flex flex-col justify-around items-center mb-5'>
        <div className='h-full flex flex-col justify-start items-center gap-5 mt-[100px] overflow-y-scroll'>
          <CustomSelect selectName={"THEME"} options={options} setValue={setValue} isDropdown={false}/>
          <CustomSelect selectName={"Equipment(Optional)"} options={options} setValue={setValue} />
          <CustomSelect selectName={"Workout Duration"} options={options} setValue={setValue} />
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Button isUpdateButton={true} placeholder={"Start"} onClick={() => {
            console.log("start the customise workout")
          }} />
          <Button isUpdateButton={false} placeholder={"Update"} onClick={() => {
            console.log("update the customise workout")
          }} />
        </div>
      </div>
    </div>
  )
}

export default CustomiseWorkout