import React, { useState } from 'react'
import "../components/styles/SliderCard.css"
import crossicon from './assets/icons/crossicon.png'
import Button from './Button';

function SliderCard() {
    const [openModal, setOpenModal] = useState(false);

    const SliderDetails = () => {
        return (
            <div className='bg-[#141414] h-[100vh] w-full z-[1000] fixed top-0 flex flex-col justify-around items-center overflow-y-scroll'>
                <img src={crossicon} alt="crossicon" className='w-[26px] h-[26px] absolute top-5 right-4' onClick={() => setOpenModal(false)} />
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <h2 className='sliderDetailName mt-[35px]'>Biceps Curl</h2>
                    <p className='sliderDetailCount'>You have done this exercise 32 times</p>
                </div>
                <div className='w-[302px] flex flex-col justify-center items-center gap-2'>
                    <img className='w-[297px] h-[237.963px] rounded-[13.2px] object-cover' src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                    <p className='sliderDetailDescription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .
                    </p>
                </div>
                <div className='items-end'>
                    <Button isUpdateButton={true} placeholder={"Done"} onClick={() => setOpenModal(false)} />
                </div>
            </div>
        )
    }
    return (
        <div className='cardcontainer flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h2 className='cardheader'>Biceps Curl</h2>
                <div className='flex flex-row justify-start items-center gap-1'>
                    <div className='repscontainer'>
                        <p className='reps'>7 REPS</p>
                    </div>
                    <div className='prcontainer'>
                        <p className='pr'>PR 34 KG</p>
                    </div>
                    <div className='lastworkoutcontainer'>
                        <p className='pr'>Last Workout 26 KG</p>
                    </div>
                </div>
                <p className='workoutcount'>You have done this workout 32 times</p>
                <img className='w-[297px] h-[237.963px] rounded-[13.2px] object-cover' src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                <div className='tapdetailscontainer' onClick={() => setOpenModal(prevValue => true)}>
                    <p className='tapdetailstext'>Tap For Details</p>
                </div>
            </div>
            {openModal && <SliderDetails />}
        </div>
    )
}

export default SliderCard