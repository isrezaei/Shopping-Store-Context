import RenderApiData from "./Result/RenderApiData";
import {useContext} from "react";
import {DataFromState} from "./Context/StateContext";
import Header from "./Header/Header";

function App() {

    const {state , dispatch} = useContext(DataFromState)

    console.log(state)


    return (
        <>
            <Header/>
            <RenderApiData/>
        </>
    )

}

export default App;
