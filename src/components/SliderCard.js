import React, { useState } from 'react'
import "../components/styles/SliderCard.css"
import crossicon from './assets/icons/crossicon.png'
import Button from './Button';

function SliderCard({ movement }) {
    const [openModal, setOpenModal] = useState(false);

    const SliderDetails = () => {
        return (
            <div className='bg-[#141414] h-[100vh] w-full z-[1000] absolute top-0 flex flex-col justify-around items-center overflow-y-scroll'>
                <img src={crossicon} alt="crossicon" className='w-[26px] h-[26px] absolute top-5 right-4' onClick={() => setOpenModal(false)} />
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <h2 className='sliderDetailName mt-[35px]'>{movement?.fullName}</h2>
                    <p className='sliderDetailCount'>You have done this exercise {movement?.count} times</p>
                </div>
                <div className='w-[302px] flex flex-col justify-center items-center gap-2'>
                    {movement?.link && <img className='w-[297px] h-[237.963px] rounded-[13.2px] object-cover' src={movement?.link} alt="img" />}
                    {movement?.description && <p className='sliderDetailDescription'>
                        {movement?.description}
                    </p>}
                    {movement?.hint && <p className='sliderDetailDescription'>
                        Hint : {movement?.hint}
                    </p>}
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
                <div className='tapdetailscontainer' onClick={() => setOpenModal(prevValue => true)}>
                    <p className='tapdetailstext'>Tap For Details</p>
                </div>
            </div>
            {openModal && <SliderDetails />}
        </div>
    )
}

export default SliderCard