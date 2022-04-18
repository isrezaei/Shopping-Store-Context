import {CheckBucket} from "../Helper/Helper";
import {QuantityItem} from "../Helper/Helper";
import {DataFromState} from "../Context/StateContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

const ShowApiData = ({ApiData}) => {

    const {category , description , id , image , price , title} = ApiData
    const {state , dispatch} = useContext(DataFromState)



    return (
        <div style={{
            display : "flex",
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'flex-start'
        }}>

            <img src={image} style={{width : '10vw'}} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{price}</h3>
            <p>{category}</p>

            <div style={{
                display : "flex",
                justifyContent : 'center',
                alignItems : 'center'
            }}>

                {
                    CheckBucket(state , id) ?
                        <button onClick={()=> dispatch({type : 'IncreaseCounter' , payload : ApiData})}> + </button> :
                        <button onClick={()=> dispatch({type : 'AddToShopCard' , payload : ApiData})}>Add to Card</button>
                }

                {QuantityItem(state , id) > 1 && <button onClick={()=> dispatch({type : 'DecreaseCounter' , payload : ApiData})}>-</button>}
                {QuantityItem(state , id) === 1 && <button onClick={()=> dispatch({type : 'RemoveToShopCard' , payload : ApiData})}>Remove to Card</button>}

                <Link to={`/details/${id}`}>See Details</Link>

            </div>
        </div>
    );
};

export default ShowApiData;