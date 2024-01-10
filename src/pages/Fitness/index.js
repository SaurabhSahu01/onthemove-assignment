import React, { useState } from 'react'
import WorkoutDay from '../../components/WorkoutDay'
import Button from '../../components/Button'
import ProgramCard from '../../components/ProgramCard'
import CustomiseWorkout from '../../components/CustomizeWorkout'
import "./styles.css"
function FitnessPage({ username, focus }) {
    const [isOpenModal, setOpenModal] = useState(false);
    return (
        <div className='w-full h-full flex flex-col items-center justify-start mb-[78px]'>
            <div className='w-full flex flex-col justify-center items-stretch headercontainer'>
                <div className='w-full flex flex-row justify-between items-end px-3'>
                    <div className='flex flex-col justify-start items-start gap-3'>
                        <h1 className='mainheader'>Fitness</h1>
                        <div className='flex flex-col justify-start items-start'>
                            {/* <h3 className='username'>Hi {username},</h3> */}
                            <h3 className='username'>Hi Rishi,</h3>
                            <p className='headerline'>Let's crunch this workout</p>
                        </div>
                    </div>
                    <WorkoutDay day={1} month={"JAN"} />
                </div>
            </div>

            <div className='w-full px-3 mt-3 flex flex-row justify-around items-center'>
                <div className='w-full text-start'>
                    <p className='focus'>TODAY'S FOCUS</p>
                    {/* <h2 className='username'>{focus}</h2> */}
                    <h2 className='username'>Horizontal Pull</h2>
                </div>
                <div className='w-full text-end focusinfo'>
                    <p>35 mins</p>
                    <p>740 Kcal</p>
                </div>
            </div>

            <div className='w-full px-3 flex flex-col justify-center items-center gap-3 '>
                <ProgramCard nameOfProgram={"Gymanstic Strength"} numberOfMovements={4} isElite={false} />
                <ProgramCard nameOfProgram={"Metcon"} numberOfMovements={4} isElite={true} />
                <ProgramCard nameOfProgram={"Strength"} numberOfMovements={4} isElite={false} />
            </div>

            <div className='w-full flex flex-col justify-center items-center gap-2 mt-3'>
                <Button isUpdateButton={true} placeholder={"Start"} onClick={() => console.log("hello")} />
                <Button isUpdateButton={false} placeholder={"Customize Workout"} onClick={() => setOpenModal(true)} />
            </div>
            {isOpenModal && <CustomiseWorkout setOpenModal={setOpenModal}/>}
        </div>
    )
}

export default FitnessPage