import {useContext} from "react";
import {DataFromState} from "../Context/StateContext";
import ShowShopList from "./ShowShopList";

const RenderShopList = () => {

    const {state} = useContext(DataFromState)


    return (
        <div>
            {state.shopCard.map(items => <ShowShopList key={items.id} ShopCard={items}/>)}
        </div>
    );
};

export default RenderShopList;