import React, { useContext } from 'react'
import MovementsLayout from './MovementsLayout'
import { MovementContext } from '../context/MovementsContext'
import { APIContext } from '../context/APIContext'
import MovementComponent from './MovementComponent'
function Movements() {
  const userData = useContext(APIContext);
  const [maxMovements, movementCount, setMovementCount] = useContext(MovementContext);
  return (
    <MovementsLayout>
      <div className='flex flex-col items-center justify-start'>
        {
          userData?.program.map((prg, index) => {
              return (index !== 0 && index === movementCount) && <MovementComponent program={prg} key={index}/>
          })   
        }
      </div>
    </MovementsLayout>
  )
}

export default Movements