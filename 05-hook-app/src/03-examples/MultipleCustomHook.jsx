import { useFetch, useCounter } from "../hooks";
import { LoadingPokemon, Pokemon} from "./";

export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    const {name, sprites} = !!data && data;

    return(
        <>
            <h1>Pokedex</h1>
            <hr />

           {
            isLoading
                ? <LoadingPokemon />
                : <Pokemon name = {name} sprites = {sprites.front_default}/>
           }

            <button classNameName="btn btn-primary" onClick={() => increment()} disabled = {isLoading}>
                Next Pokemon
            </button>

        </>
    )
}