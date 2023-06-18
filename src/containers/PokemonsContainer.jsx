import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import Pokemon from "../components/Pokemon";

export default function PokemonsContainer() {
    const { data, loading, error } = useQuery(GET_POKEMONS)

    let pokemonsJsx 

    if (data) {
        pokemonsJsx = data.pokemons.map(item => <Pokemon  key={item.id} pokemon={item} />)
    }


    if (loading) return <pre>Loading...</pre>
    if (error) return <pre>{error.message}</pre>

    return (
        <>
            {data && pokemonsJsx}
        </>
    )
}