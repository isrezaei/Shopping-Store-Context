import axios from "axios";


export const FetchData = axios.create({
    baseURL: 'https://fakestoreapi.com',
});