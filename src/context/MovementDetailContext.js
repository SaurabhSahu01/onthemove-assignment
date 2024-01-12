import { createContext, useState } from "react";
export const MovementDetailContext = createContext();

const MovementDetailState = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [movementDetails, setMovementDetails] = useState(null);
    return (
        <MovementDetailContext.Provider value={[openModal, movementDetails, setOpenModal, setMovementDetails]}>
            {children}
        </MovementDetailContext.Provider>
    )
}
export default MovementDetailState