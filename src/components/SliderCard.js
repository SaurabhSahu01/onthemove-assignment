import React, { useState, useContext } from 'react'
import "../components/styles/SliderCard.css"
import { MovementDetailContext } from '../context/MovementDetailContext';

function SliderCard({ movement }) {
    const [openModal, movementDetails, setOpenModal, setMovementDetails] = useContext(MovementDetailContext);
    
    return (
        <div className='cardcontainer flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h2 className='cardheader'>{movement?.name}</h2>
                <div className='flex flex-row justify-start items-center gap-1'>
                    <div className='repscontainer'>
                        <p className='reps'>{movement?.reps} REPS</p>
                    </div>
                    <div className='prcontainer'>
                        <p className='pr'>PR 34 KG</p>
                    </div>
                    <div className='lastworkoutcontainer'>
                        <p className='pr'>Last Workout 26 KG</p>
                    </div>
                </div>
                <p className='workoutcount'>You have done this workout {movement?.count} times</p>
                {movement?.link && <img className='w-[297px] h-[237.963px] rounded-[13.2px] object-cover' src={movement?.link} alt="img" />}
                <div className='tapdetailscontainer' onClick={() => {
                    setMovementDetails(movement);
                    setOpenModal(prevValue => true);
                }}>
                    <p className='tapdetailstext'>Tap For Details</p>
                </div>
            </div>
        </div>
    )
}

export default SliderCard