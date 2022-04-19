import {DataFromState} from "../Context/StateContext";
import {Link} from "react-router-dom";
import {useContext} from "react";

const Header = () => {

    const {state} = useContext(DataFromState)

    return (
        <div style={{width : '100%' , height : '5vw'}}>
            <h1>Count = {state.counter}</h1>
            <Link to='/list'>Go to List shop</Link>
        </div>
    );
};

export default Header;