import axios from "axios";

export const pokeminApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

