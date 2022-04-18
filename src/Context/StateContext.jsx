import {useReducer , createContext} from "react";

const initialState = {

    shopCard : [],
    counter : 0,
    price : 0,
    checkout : false
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
            }
        case 'RemoveToShopCard':
            const RemoveItems = state.shopCard.filter(items => items.id !== payload.id)
            return {
                ...state,
                shopCard: [...RemoveItems]
            }
        case 'IncreaseCounter' :
            const IncreaseIndex = state.shopCard.findIndex(items => items.id === payload.id)
            state.shopCard[IncreaseIndex].quantity++

            return {
                ...state
            }
        case 'DecreaseCounter' :
            const DecreaseIndex =  state.shopCard.findIndex(items => items.id === payload.id)
            state.shopCard[DecreaseIndex].quantity--

            return {
                ...state
            }

        default :
            return state
    }
}


export const StateContext = ({children}) =>
{
    const [state , dispatch] = useReducer( reducer , initialState)

    return (
        <DataFromState.Provider value={{state , dispatch}}>
            {children}
        </DataFromState.Provider>
    )
}

export const DataFromState = createContext()

