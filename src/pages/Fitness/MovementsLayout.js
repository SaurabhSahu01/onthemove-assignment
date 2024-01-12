import React, {useContext} from 'react'
import "./MovementsLayout.css";
import MovementsSwiper from './MovementsSwiper';
import DetailsPage from './DetailsPage';
import { MovementDetailContext } from '../../context/MovementDetailContext';
function MovementsLayout({ children }) {
  const [openModal, movementDetails, setOpenModal, setMovementDetails] = useContext(MovementDetailContext);
  return (
    <div className='movementsLayoutContainer'>
      <div className='w-full pb-[85px]'>
        {children}
        {openModal && <DetailsPage/>}
      </div>
      <MovementsSwiper/>
    </div>
  )
}

export default MovementsLayout