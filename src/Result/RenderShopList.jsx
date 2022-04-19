import {useContext} from "react";
import {DataFromState} from "../Context/StateContext";
import ShowShopList from "./ShowShopList";
import {Link} from "react-router-dom";

const RenderShopList = () => {

    const {state , dispatch} = useContext(DataFromState)

    return (
        <div>


            <div style={{
                width : '90%' ,
                display : 'flex',
                justifyContent : 'space-around',
                alignItems : 'center'
            }}>
                <h1>Total Items : {state.counter} </h1>
                <h1>Total Payments : {state.total} $</h1>

                <button onClick={()=> dispatch({type : 'Checkout'})}> Checkout </button>

                <button onClick={()=> dispatch({type : 'Clear'})}> Clear </button>

            </div>




            {state.shopCard.map(items => <ShowShopList key={items.id} ShopCard={items}/>)}


            {
                state.checkout &&
                <div>
                    <h1>Thanks for bye</h1>
                    <button> <Link to ='/'>Back to Home </Link> </button>
                </div>
            }

            {
                !state.checkout && state.shopCard.length === 0 && <div>
                    <h1>Your List is Empty now</h1>
                    <button><Link to='/'>Back to Home</Link></button>
                </div>
            }



        </div>
    );
};

export default RenderShopList;