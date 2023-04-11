import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.sass'
import axios from 'axios'

interface IApiResponse {
  results: IPokemonResponse[]
}
interface IPokemonResponse {
  name: string
  url: string
  id?: number
}
export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const data = (await axios<IApiResponse>(`${api}/?limit=${maxPokemons}`)).data

  // add pokemon index
  data.results.forEach((item, index) => (item.id = index + 1))

  return {
    props: {
      pokemons: data.results
    }
  }
}
export default function Home({ pokemons }: { pokemons: IPokemonResponse[] }) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

