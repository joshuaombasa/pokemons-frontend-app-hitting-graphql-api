import React from 'react'
import { useQuery, gql } from '@apollo/client'
import './App.css'
import PokemonsContainer from './containers/PokemonsContainer'

import { GET_POKEMONS } from './graphql/get-pokemons'

function App() {
 
  const {data, loading, error} = useQuery(GET_POKEMONS)

  if (data) {
    console.log(data.pokemons)
  }

  if (loading) return <pre>Loading...</pre>
  if (error) return <pre>{error.message}</pre>

  return (
    <>
     <PokemonsContainer/>
    </>
  )
}

export default App
