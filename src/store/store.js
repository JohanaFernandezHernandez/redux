import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './slicer/counter'
import { pokemonSlice } from "./slicer/pokemon";
import { todosApi } from "./apis/todosApi";


export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware)
})
