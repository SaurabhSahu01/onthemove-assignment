import React, { useState, useEffect } from 'react'
import "./styles/CustomizeWorkout.css"


function CustomSelect({ selectName, options, setValue, isDropdown = true }) {
    const [selectedOption, setSelectedOption] = useState(options[1]["value"]);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setValue(prevValue => selectedOption);
    }, [selectedOption])

    const CustomSelectOptionsDropdown = () => {
        return (
            <div className='w-full h-fit flex flex-col justify-center items-center gap-1 bg-black rounded-md'>
                {
                    options.map((option) => {
                        return (
                            <div className={`w-[358px] h-[49px] rounded-md flex flex-row items-center justify-start px-5 ${selectedOption === option.value ? 'bg-[#2A2A2A]' : 'bg-black'}`} key={option.label} onClick={() => {
                                setSelectedOption(prevOption => option.value);
                                setOpen(false);
                            }}>
                                <p className='selectText'>{option.value}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    const CustomSelectOptions = () => {
        return (
            <div className='w-full h-full fixed top-0 right-0 flex flex-row items-center justify-center z-50 bg-black opacity-100'>
                <div className='w-full h-fit flex flex-col justify-center items-center gap-1 rounded-md'>
                    {
                        options.map((option) => {
                            return (
                                <div className={`w-[358px] h-[49px] rounded-md flex flex-row items-center justify-start px-5 ${selectedOption === option.value ? 'bg-[#2A2A2A]' : 'bg-black'}`} key={option.label} onClick={() => {
                                    setSelectedOption(prevOption => option.value);
                                    setOpen(false);
                                }}>
                                    <p className='selectText'>{option.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
    return (
        <div className='flex flex-col justify-center items-start gap-2'>
            <p className='selectName'>{selectName}</p>
            <div className='w-[358px] h-[49px] flex flex-row justify-between items-center px-5 rounded-[12px] border-[1px] border-[#2A2A2A]' onClick={() => {
                setOpen(prevValue => !prevValue);
            }}>
                <p className='selectText'>{selectedOption}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path d="M7.29344 7.80664C7.55444 7.80664 7.77705 7.70685 7.97663 7.49959L13.8336 1.51212C14.0025 1.35092 14.0869 1.13598 14.0869 0.890345C14.0869 0.391389 13.7031 -9.88056e-05 13.1964 -9.87834e-05C12.9508 -9.87727e-05 12.7282 0.0996923 12.5593 0.268569L7.29344 5.66497L2.02757 0.26857C1.85101 0.0996928 1.6284 -9.82778e-05 1.38276 -9.8267e-05C0.88381 -9.82452e-05 0.5 0.39139 0.5 0.890346C0.5 1.13599 0.584438 1.35092 0.753315 1.51212L6.61026 7.49959C6.80984 7.70685 7.03245 7.79896 7.29344 7.80664Z" fill="#B1B1B1" />
                </svg>
            </div>
            {isOpen && (isDropdown ? <CustomSelectOptionsDropdown /> : <CustomSelectOptions/>)}
        </div>
    )
}

export default CustomSelect