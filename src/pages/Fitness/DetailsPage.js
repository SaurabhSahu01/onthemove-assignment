import React, {useContext} from 'react'
import crossicon from "../../components/assets/icons/crossicon.png"
import Button from '../../components/Button'
import { MovementDetailContext } from '../../context/MovementDetailContext'
import "../Fitness/DetailsPage.css";
const DetailsPage = () => {
    const [openModal, movementDetails, setOpenModal, setMovementDetails] = useContext(MovementDetailContext);
    return (
        <div className='bg-[#141414] h-screen w-full z-[1000] fixed top-0 left-0 flex flex-col justify-around items-center'>
            <img src={crossicon} alt="crossicon" className='w-[26px] h-[26px] absolute top-5 right-4' onClick={() => {
                setMovementDetails(null);
                setOpenModal(prevValue => false);
            }} />
            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <h2 className='sliderDetailName mt-[35px]'>{movementDetails?.fullName}</h2>
                <p className='sliderDetailCount'>You have done this exercise {movementDetails?.count} times</p>
            </div>
            <div className='w-[302px] flex flex-col justify-center items-center gap-2'>
                {movementDetails?.link && <img className='w-[297px] h-[237.963px] rounded-[13.2px] object-cover' src={movementDetails?.link} alt="img" />}
                {movementDetails?.description && <p className='sliderDetailDescription'>
                    {movementDetails?.description}
                </p>}
                {movementDetails?.hint && <p className='sliderDetailDescription'>
                    Hint : {movementDetails?.hint}
                </p>}
            </div>
            <div className='items-end'>
                <Button isUpdateButton={true} placeholder={"Done"} onClick={() => {
                    setMovementDetails(null);
                    setOpenModal(prevValue => false)
                }} />
            </div>
        </div>
    )
}

export default DetailsPage