import { createContext, useEffect, useState } from "react";
export const APIContext = createContext();

const APIState = ({ children }) => {
    const [APIData, setAPIData] = useState(null);
    const fetchData = async () => {
        const jsonresponse = await fetch('https://otm-main-production.up.railway.app/api/v1/workout/hyper?memberCode=PRAN')
        const dataresponse = await jsonresponse.json();
        const result = dataresponse[0]
        setAPIData(result);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <APIContext.Provider value={APIData}>
            {children}
        </APIContext.Provider>
    )
}
export default APIState;