import {useReducer , createContext} from "react";

const initialState = {

    shopCard : [],
    counter : 0,
    total : 0,
    checkout : false,
}

const QuantityHandel = (state) =>
{
    const counter = state.reduce((prams , items) => prams + items.quantity , 0)
    const total = state.reduce((prams , items)=> prams + items.quantity * items.price , 0).toFixed(2)


    return {counter , total}
}

const reducer = (state , {type , payload}) =>
{
    switch (type)
    {
        case 'AddToShopCard' :
            if (!state.shopCard.find(items => items.id === payload.id))
            {
                state.shopCard.push({
                    ...payload,
                    quantity : 1
                })
            }

            return  {
                ...state,
                shopCard : [...state.shopCard],
                ...QuantityHandel(state.shopCard),
                checkout : false,
            }
        case 'RemoveToShopCard':
            const RemoveItems = state.shopCard.filter(items => items.id !== payload.id)
            return {
                ...state,
                shopCard: [...RemoveItems],
                ...QuantityHandel(RemoveItems)
            }
        case 'IncreaseCounter' :
            const IncreaseIndex = state.shopCard.findIndex(items => items.id === payload.id)
            state.shopCard[IncreaseIndex].quantity++

            return {
                ...state,
                ...QuantityHandel(state.shopCard)
            }
        case 'DecreaseCounter' :
            const DecreaseIndex =  state.shopCard.findIndex(items => items.id === payload.id)
            state.shopCard[DecreaseIndex].quantity--

            return {
                ...state,
                ...QuantityHandel(state.shopCard)
            }

        case "Checkout" :
            return {
                shopCard : [],
                counter : 0,
                total : 0,
                checkout : true,
            }
        case "Clear":
            return {
                shopCard : [],
                counter : 0,
                total : 0,
                checkout : false,
            }

        default :
            return state
    }
}


const StateContext = ({children}) =>
{
    const [state , dispatch] = useReducer( reducer , initialState)

    return (
        <DataFromState.Provider value={{state , dispatch}}>
            {children}
        </DataFromState.Provider>
    )
}

export default StateContext
export const DataFromState = createContext()

