import axios from "axios";

export const productAPI = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const currencyAPI = axios.create({
    baseURL: "https://economia.awesomeapi.com.br",
    headers: {
        "Content-Type": "application/json",
    },
});