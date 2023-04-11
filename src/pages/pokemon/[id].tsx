// next components
// types
import { getPokemons } from '@/services/getPokemons'
import { IPokemonWithId } from '@/types/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
// bibs
import axios from 'axios'

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPokemons()

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        id: pokemon.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params as IParams
  const res = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data

  return {
    props: {
      pokemon: res
    }
  }
}

export default function Pokemon({ pokemon }: { pokemon: IPokemonWithId }) {
  return <p>{pokemon.name}</p>
}
