import {DataFromState} from "../Context/StateContext";
import {useContext} from "react";

const Header = () => {

    const {state} = useContext(DataFromState)

    console.log(state.counter)

    return (
        <div style={{width : '100%' , height : '5vw'}}>
            <h1>Count = {state.counter}</h1>
        </div>
    );
};

export default Header;