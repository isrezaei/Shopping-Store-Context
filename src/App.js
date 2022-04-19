import Header from "./Header/Header";
import RenderApiData from "./Result/RenderApiData";
import RenderShopList from "./Result/RenderShopList";
import ShowApiDetails from "./Result/ShowApiDetails";
import NotFound from "./Result/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {



    return (
        <>

                    <Header/>
                    <Routes>
                        <Route path='/' exact element={<RenderApiData/>}/>
                        <Route path='/details/:id' element={<ShowApiDetails/>}/>
                        <Route path='/list' element={<RenderShopList/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
        </>
    )

}

export default App;
