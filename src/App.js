import RenderApiData from "./Result/RenderApiData";
import {useContext} from "react";
import {DataFromState} from "./Context/StateContext";

function App() {

    const {state , dispatch} = useContext(DataFromState)

    console.log(state)


  return (
      <>
      <RenderApiData/>
      </>
  )

}

export default App;
