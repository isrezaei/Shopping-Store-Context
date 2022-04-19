import {Link} from "react-router-dom";
import {DataFromState} from "../Context/StateContext";
import {useContext} from "react";

const ShowShopList = ({ShopCard}) => {

    const {category , description , image , price , quantity , title , id} = ShopCard
    const {dispatch , state} = useContext(DataFromState)

    console.log(price)

    return (

        <div style={{
            display : "flex",
            flexDirection : 'column',
            justifyContent : 'space-around',
            alignItems : 'center'
        }}>

            <div style={{
                width : '90%' ,
                display : 'flex',
                justifyContent : 'space-around',
                alignItems : 'center'
            }}>
                <h1>Total Items : {state.counter} </h1>
                <h1>Total Payments : {state.total} $</h1>
            </div>


            <div style={{
                width : '90%' ,
                display : "flex",
                justifyContent : 'space-evenly',
                alignItems : 'center',
                marginTop : '2vw'
            }}>

                <img src={image} style={{width : '6vw'}} alt={title}/>
                <h3>{title}</h3>
                <h3>{quantity}</h3>
                <h3>{price}</h3>

                <div style={{
                    display : "flex",
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>

                    <button onClick={()=> dispatch({type : 'IncreaseCounter' , payload : ShopCard})}> + </button>
                    {quantity > 1 && <button onClick={()=> dispatch({type : 'DecreaseCounter' , payload : ShopCard})}>-</button>}
                    {quantity === 1 && <button onClick={()=> dispatch({type : 'RemoveToShopCard' , payload : ShopCard})}>Remove to Card</button>}

                </div>


                <Link to={`/details/${id}`}> Go to Details product </Link>

            </div>

        </div>

    );
};

export default ShowShopList;