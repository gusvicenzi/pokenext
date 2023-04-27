// types
import { IPokemonWithId } from '@/types/types'
// bibs
import axios from 'axios'

interface IApiResponse {
  results: IPokemonWithId[]
}

export const getPokemons = async (
  numberOfPorkemons: number,
  offset: number = 0
) => {
  // const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const data = (
    await axios<IApiResponse>(
      `${api}/?limit=${numberOfPorkemons}&offset=${offset}`
    )
  ).data.results

  // add pokemon index
  data.forEach((item, index) => (item.id = offset + index + 1))
  return data
}
