export const CheckBucket = (state , id) =>
{
    console.log(!!state.shopCard.find(items =>  items.id === id))

    return !!state.shopCard.find(items =>  items.id === id)
}


export const QuantityItem = (state , id) =>
{
    const IndexItem = state.shopCard.findIndex(items => items.id === id)

    if (IndexItem === -1)
    {
        return false
    }
    return  state.shopCard[IndexItem].quantity
}