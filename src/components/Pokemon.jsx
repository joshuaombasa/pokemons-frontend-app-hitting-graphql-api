import React from "react";

export default function Pokemon({pokemon}) {
    return (
        <>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt="" />
        </>
    )
}