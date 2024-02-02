import { pokeminApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";


export const getPokemons = ( page = 0) =>{
    return async ( dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //realizar peticion a la api CON FETCH
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        // console.log(data);

        //realizar peticion a la api CON AXIOS
        const {data} = await pokeminApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        

        dispatch(setPokemons({
            pokemons: data.results,
            page: page +1
        }));

    }

}