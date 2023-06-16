import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export default function PokemonsContainer() {

    const { data, loading, error } = useQuery(GET_POKEMONS)

    if (data) {
        console.log(data.pokemons)
    }

    if (loading) return <pre>Loading...</pre>
    if (error) return <pre>{error.message}</pre>

    return (
        <>
            <p>This is the container</p>
        </>
    )
}