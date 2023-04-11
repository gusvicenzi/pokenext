// next components
import Image from 'next/image'
// styles
import styles from './Card.module.sass'
// types
import { IPokemonWithId } from '@/types/types'
import Link from 'next/link'

export default function Card({ pokemon }: { pokemon: IPokemonWithId }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  )
}
