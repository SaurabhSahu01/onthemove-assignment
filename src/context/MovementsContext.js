import { createContext, useState } from "react";

export const MovementContext = createContext();

const MovementState = ({children}) => {
    const [movementCount, setMovementCount] = useState(0)
    return(
        <MovementContext.Provider value={[movementCount, setMovementCount]}>
            {children}
        </MovementContext.Provider>
    )
}
export default MovementState;