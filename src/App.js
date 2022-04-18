import RenderApiData from "./Result/RenderApiData";
import Header from "./Header/Header";
import ShowApiDetails from "./Result/ShowApiDetails";
import NotFound from "./Result/NotFound";
import { Routes, Route } from "react-router-dom";
import ApiContext from "./Context/ApiContext";
import StateContext from "./Context/StateContext";

function App() {



    return (
        <>

                    <Header/>
                    <Routes>
                        <Route path='/' exact element={<RenderApiData/>}/>
                        <Route path='/details/:id' element={<ShowApiDetails/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
        </>
    )

}

export default App;
