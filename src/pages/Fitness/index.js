import React, { useState, useContext } from 'react'
import WorkoutDay from '../../components/WorkoutDay'
import Button from '../../components/Button'
import ProgramCard from '../../components/ProgramCard'
import CustomiseWorkout from '../../components/CustomizeWorkout'
import Layout from '../Layout'
import { APIContext } from '../../context/APIContext'
import { useNavigate} from 'react-router-dom'
import { MovementContext } from '../../context/MovementsContext'
import "./styles.css"
function FitnessPage() {
    const navigate = useNavigate();
    const [isOpenModal, setOpenModal] = useState(false);
    const userdata = useContext(APIContext);
    const [maxMovements, movementCount, setMovementCount] = useContext(MovementContext);

    return (
        <Layout>
            <div className='w-full h-full flex flex-col items-center justify-start'>
                <div className='w-full flex flex-col justify-center items-stretch headercontainer'>
                    <div className='w-full flex flex-row justify-between items-end px-3'>
                        <div className='flex flex-col justify-start items-start gap-3'>
                            <h1 className='mainheader'>Fitness</h1>
                            <div className='flex flex-col justify-start items-start'>
                                <h3 className='username'>Hi {userdata && userdata.memberCode},</h3>
                                {/* <h3 className='username'>Hi Rishi,</h3> */}
                                <p className='headerline'>Let's crunch this workout</p>
                            </div>
                        </div>
                        <WorkoutDay day={userdata && userdata.day.split(' ')[2]} month={userdata && userdata.day.split(' ')[0]} />
                    </div>
                </div>

                <div className='w-full px-3 mt-3 flex flex-row justify-around items-center'>
                    <div className='w-full text-start'>
                        <p className='focus'>TODAY'S FOCUS</p>
                        <h2 className='username'>{userdata && userdata.theme}</h2>
                        {/* <h2 className='username'>Horizontal Pull</h2> */}
                    </div>
                    <div className='w-full text-end focusinfo'>
                        <p>35 mins</p>
                        <p>740 Kcal</p>
                    </div>
                </div>

                <div className='w-full px-3 flex flex-col justify-center items-center gap-3 '>
                    {
                        userdata && userdata.program.map((prog, index) => {
                            if (index !== 0) {
                                return(
                                    <ProgramCard nameOfProgram={prog.name} numberOfMovements={prog.movements.length} isElite={false} onClick={() => {
                                        setMovementCount(prevCount => index);
                                        navigate('/fitness/movements');
                                    }}/>
                                )
                            }
                        })
                    }
                </div>

                <div className='w-full flex flex-col justify-center items-center gap-2 mt-3'>
                    <Button isUpdateButton={true} placeholder={"Start"} onClick={() => {
                        navigate('/fitness/movements')
                    }} />
                    <Button isUpdateButton={false} placeholder={"Customize Workout"} onClick={() => setOpenModal(true)} />
                </div>
                {isOpenModal && <CustomiseWorkout setOpenModal={setOpenModal} />}
            </div>
        </Layout>
    )
}

export default FitnessPage