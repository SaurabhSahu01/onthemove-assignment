import React from 'react'
import "../components/styles/MovementsSwiper.css"
import { useContext } from 'react'
import { MovementContext } from '../context/MovementsContext'
function MovementsSwiper() {
    const [maxMovements, movementCount, setMovementCount] = useContext(MovementContext);
    return (
        <div className='swiperContainer w-full flex flex-row justify-between items-center fixed bottom-0'>
            <div className='arrowsContainer flex flex-row items-center justify-center' onClick={() => {
                setMovementCount(prevValue => {
                    if(prevValue > 1) return prevValue - 1;
                    return prevValue;
                });
            }}>
                <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="53" viewBox="0 0 32 53" fill="none">
                        <path d="M27.8379 48.8868L5.00076 26.8371L27.8379 4" stroke="black" strokeWidth="6.41042" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <p className='movementText'>Movement</p>
                <p className='movementIndicator'>{movementCount}/{maxMovements}</p>
            </div>
            <div className='arrowsContainer flex flex-row items-center justify-center' onClick={() => {
                setMovementCount(prevValue => {
                    if(prevValue < maxMovements) return prevValue + 1;
                    return prevValue;
                });
            }}>
                <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="53" viewBox="0 0 32 53" fill="none">
                        <path d="M4 48.8868L26.8371 26.8371L4 4" stroke="black" strokeWidth="6.41042" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MovementsSwiper