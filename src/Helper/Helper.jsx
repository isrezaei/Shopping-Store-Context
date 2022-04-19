export const CheckBucket = (state , id) =>
{
    return !!state.shopCard.find(items =>  items.id === id)
}


export const QuantityItem = (state , id) =>
{

    // console.log(`${state} ,,, ${id}`)

    const IndexItem = state.shopCard.findIndex(items => items.id === id)

    if (IndexItem === -1)
    {
        return false
    }
    return  state.shopCard[IndexItem].quantity
}