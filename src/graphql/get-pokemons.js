import { gql } from '@apollo/client'


export  const GET_POKEMONS = gql `
{
  pokemons(first:9){
    id
    name
    image
    attacks{
      special{
        name
        damage
      }
    }
  }
}
`