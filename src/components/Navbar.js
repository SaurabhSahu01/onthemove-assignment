import React, { useEffect } from 'react';
import "./styles/Navbar.css";
import { outlinedIcons, filledIcons } from './assets/navbaricons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { navContext } from '../context/NavigationContext';

function Navbar() {
    const [currentPageIndex, setCurrentPageIndex] = useContext(navContext);
    const navigate = useNavigate();
    const pageIndex = [0, 1, 2, 3, 4];
    const pageMapping = {
        0: "/",
        1: "/fitness",
        2: "/meals",
        3: "/habits",
        4: "/settings"
    }
    useEffect(() => {
        navigate(pageMapping[currentPageIndex])
    }, [currentPageIndex])

    return (
        <div className='navbar w-full flex flex-col justify-center items-center fixed bottom-0'>
            <ul className='w-full flex flex-row justify-around items-center'>
                {pageIndex.map(index => (
                    <li key={index} onClick={() => setCurrentPageIndex(prevIndex => index)}>
                        {currentPageIndex === index ? filledIcons[index] : outlinedIcons[index]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
