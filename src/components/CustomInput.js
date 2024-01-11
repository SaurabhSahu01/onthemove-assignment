import React, { useRef, useEffect } from 'react'
import "../components/styles/CustomInput.css"

function CustomInput({ label, type, placeholder, options }) {
    const value = useRef({});

    const SelectComponent = () => {
        return (
            <div className='w-full flex flex-col justify-center items-start gap-1'>
                <label for="customselect" className='label'>{label}</label>
                <select className='w-full h-[30px] outline-none bg-transparent text-white border-b-[1px] border-b-[#B1B1B1]' id="customselect" name="customselect" onChange={(e) => {
                    value.current = {...value.current, [label]: e.target.value}
                }}>
                    {
                        options.map((option, index) => {
                            return (
                                <option value={option} key={index}>{option}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
    const InputComponent = () => {
        return(
            <div className='w-full flex flex-col justify-center items-start gap-1'>
                <label for="custominput" className='label'>{label}</label>
                <input className='w-full h-[30px] outline-none bg-transparent text-white border-b-[1px] border-b-[#B1B1B1]' type={type} id="custominput" name="custominput" placeholder={placeholder} onChange={(e) => {
                    value.current[label] = e.target.value;
                }}></input>
            </div>
        )
        
    }
    
    if(type === 'select') return <SelectComponent/>
    else return <InputComponent/>
}

export default CustomInput