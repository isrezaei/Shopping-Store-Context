import {useContext} from "react";
import {DataFromApi} from "../Context/ApiContext";
import ShowApiData from "./ShowApiData";

const RenderApiData = () => {

    const ApiData = useContext(DataFromApi)

    return (
        <div style={{
            display :'grid' ,
            gridTemplateColumns : '20vw 20vw 20vw',
            justifyContent : "space-evenly",
            alignItems  :'flex-start'
        }}>
            {ApiData.map(data => <ShowApiData key={data.id} ApiData={data}/>)}
        </div>
    );
};

export default RenderApiData;