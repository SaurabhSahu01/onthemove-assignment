import React from 'react'
import "./styles/Navbar.css"
import { outlinedIcons, filledIcons } from './assets/navbaricons'

function Navbar({ currentPageIndex, setCurrentpageIndex }) {
    const pageIndex = [0, 1, 2, 3, 4]
    return (
        <div className='navbar w-full flex flex-col justify-center items-center fixed bottom-0'>
            <ul className='w-full flex flex-row justify-around items-center'>
                {
                    pageIndex.map(index => {
                        return (
                            <li onClick={() => setCurrentpageIndex(previdx => index)}>
                                {currentPageIndex === index ? filledIcons[index] : outlinedIcons[index]}
                            </li>
                        )
                    })
                }
            </ul>
            <div className='homeIndicator absolute bottom-0'></div>
        </div>
    )
}

export default Navbar
