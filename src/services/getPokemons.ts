// types
import { IPokemonWithId } from '@/types/types'
// bibs
import axios from 'axios'

interface IApiResponse {
  results: IPokemonWithId[]
}

export const getPokemons = async () => {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const data = (await axios<IApiResponse>(`${api}/?limit=${maxPokemons}`)).data

  // add pokemon index
  data.results.forEach((item, index) => (item.id = index + 1))
  return data
}
