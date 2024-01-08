import React from 'react'
import "./styles/WorkoutDay.css"
function WorkoutDay({month, day}) {
  return (
    <div className='calendar flex flex-col justify-center items-center'>
        <h3 className='textmonth'>{month}</h3>
        <h3 className='textmonth'>DAY</h3>
        <p className='textday'>{day}</p>
    </div>
  )
}

export default WorkoutDay