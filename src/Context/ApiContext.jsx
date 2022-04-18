import {useEffect , createContext , useState} from "react";
import {FetchData} from "../ServerApi/Api";


const ApiContext = ({children}) => {

    const [SaveApiData , SetApiData] = useState([])

    useEffect(() => {

        const AsyncFetchData = async () =>
        {
            SetApiData(await FetchData())
        }

        AsyncFetchData()

    } , [])

    console.log(SaveApiData)

    return (

        <DataFromApi.Provider value={SaveApiData}>
            {children}
        </DataFromApi.Provider>
    );
};

export default ApiContext;
export const DataFromApi = createContext('')