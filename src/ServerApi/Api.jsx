import axios from "axios";

const BaseUrl = 'https://fakestoreapi.com'

export const FetchData = async () =>
{
    return (await axios.get(`${BaseUrl}/products`)).data
}