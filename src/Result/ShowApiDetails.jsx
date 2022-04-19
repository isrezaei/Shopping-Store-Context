import {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {DataFromState} from "../Context/StateContext";
import {CheckBucket, QuantityItem} from "../Helper/Helper";
import {useEffect} from "react";
import {FetchData} from "../ServerApi/Api";

const ShowApiDetails = () => {

    const params = useParams()
    const {state , dispatch} = useContext(DataFromState)
    const [SaveApiDetails , SetApiDetails] = useState({})


    useEffect(() => {
        const AsyncFetchData = async () =>
        {
            return SetApiDetails((await FetchData.get(`/products/${params.id}`)).data)
        }
        AsyncFetchData()
    } , [params.id])


    const {category , description , image , price , title , id} = SaveApiDetails

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
                        <button onClick={()=> dispatch({type : 'IncreaseCounter' , payload : SaveApiDetails})}> + </button> :
                        <button onClick={()=> dispatch({type : 'AddToShopCard' , payload : SaveApiDetails})}>Add to Card</button>
                }

                <h2>{QuantityItem(state , id)}</h2>

                {QuantityItem(state , id) > 1 && <button onClick={()=> dispatch({type : 'DecreaseCounter' , payload : SaveApiDetails})}>-</button>}
                {QuantityItem(state , id) === 1 && <button onClick={()=> dispatch({type : 'RemoveToShopCard' , payload : SaveApiDetails})}>Remove to Card</button>}

            </div>
        </div>
    );
};

export default ShowApiDetails;