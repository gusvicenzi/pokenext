// next components
import Image from 'next/image'
// styles
import styles from '../styles/Home.module.sass'
// bibs
import axios from 'axios'
// components
import Card from '@/components/card/Card'
// types
import { IPokemon } from '@/types/types'

interface IApiResponse {
  results: IPokemon[]
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
export default function Home({ pokemons }: { pokemons: IPokemon[] }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1>
          Poke<span>Next</span>
        </h1>
        <Image
          src='/images/pokeball.png'
          width={50}
          height={50}
          alt='PokeNext'
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}

