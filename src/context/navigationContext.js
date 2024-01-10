import { createContext, useState } from "react";
export const navContext = createContext();

const NavigationContext = ({ children }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    return (
        <navContext.Provider value={[currentPageIndex, setCurrentPageIndex]}>
            {children}
        </navContext.Provider>
    )
}

export default NavigationContext;