import {useContext} from "react";
import {useParams} from "react-router-dom";
import {DataFromApi} from "../Context/ApiContext";
import {DataFromState} from "../Context/StateContext";
import {CheckBucket, QuantityItem} from "../Helper/Helper";

const ShowApiDetails = () => {

    const params = useParams()
    const {state , dispatch} = useContext(DataFromState)

    const ApiData = useContext(DataFromApi)

    const FixIndex = params.id - 1

    const {category , description , image , price , title , id} = ApiData[FixIndex]

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
                width : '10%',
                display : "flex",
                justifyContent : 'space-evenly',
                alignItems : 'center'
            }}>


                {
                    CheckBucket(state , id) ?
                        <button onClick={()=> dispatch({type : 'IncreaseCounter' , payload : ApiData[FixIndex]})}> + </button> :
                        <button onClick={()=> dispatch({type : 'AddToShopCard' , payload : ApiData[FixIndex]})}>Add to Card</button>
                }

                <h2>{QuantityItem(state , id)}</h2>

                {QuantityItem(state , id) > 1 && <button onClick={()=> dispatch({type : 'DecreaseCounter' , payload : ApiData[FixIndex]})}>-</button>}
                {QuantityItem(state , id) === 1 && <button onClick={()=> dispatch({type : 'RemoveToShopCard' , payload : ApiData[FixIndex]})}>Remove to Card</button>}


            </div>
        </div>
    );
};

export default ShowApiDetails;