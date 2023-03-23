import axios from "axios";

export const productAPI = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export const currencyAPI = axios.create({
    baseURL: "https://economia.awesomeapi.com.br",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});