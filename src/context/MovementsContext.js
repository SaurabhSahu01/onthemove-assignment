import { createContext, useState } from "react";
import { useContext } from "react";
import { APIContext } from "./APIContext";
export const MovementContext = createContext();

const MovementState = ({children}) => {
    const userData = useContext(APIContext);
    const maxMovements = userData?.program.length;
    const [movementCount, setMovementCount] = useState(1)
    return(
        <MovementContext.Provider value={[maxMovements, movementCount, setMovementCount]}>
            {children}
        </MovementContext.Provider>
    )
}
export default MovementState;