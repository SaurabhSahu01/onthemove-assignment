import React from 'react'
import "./styles/ProgramCard.css"
function ProgramCard({nameOfProgram, numberOfMovements, isElite, onClick}) {
  return (
    <div className='w-full px-3 flex flex-col justify-center items-start container' onClick={onClick}>
        <h1 className='programName'>{nameOfProgram}</h1>
        <div className='flex flex-row justify-center items-center gap-1'>
            <div className='movements'>
                <p className='movementsText'>{numberOfMovements} Movements</p>
            </div>
            {isElite && <div className='elite'>
                <p className='movementsText'>Elite</p>
            </div>}
        </div>
    </div>
  )
}

export default ProgramCard