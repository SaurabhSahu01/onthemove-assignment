import React from 'react'
import "../components/styles/SliderCard.css"

function SliderCard() {
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
                <div className='tapdetailscontainer'>
                    <p className='tapdetailstext'>Tap For Details</p>
                </div>
            </div>
        </div>
    )
}

export default SliderCard