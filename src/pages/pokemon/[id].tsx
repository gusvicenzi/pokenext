// next components
import Image from 'next/image'
import { useRouter } from 'next/router'
// types
import { getPokemons } from '@/services/getPokemons'
import { IPokemonWithId } from '@/types/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
// bibs
import axios from 'axios'
// styles
import styles from './Pokemon.module.sass'

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
    fallback: true // false to only show prerendered pages
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
  // useRouter to load unrendered pages
  const router = useRouter()

  if (router.isFallback) {
    return <div>Carregando...</div>
  }

  return (
    <div className={styles.pokemonContainer}>
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.typesContainer}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}>
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataHeight}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.dataWeight}>
          <h4>Massa:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}
