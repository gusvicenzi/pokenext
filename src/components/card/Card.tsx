// next components
import Image from 'next/image'
// styles
import styles from './Card.module.sass'
// types
import { IPokemonWithId } from '@/types/types'
import Link from 'next/link'
import { PokemonImage } from '../PokemonImage'
// animations
import { motion } from 'framer-motion'

export default function Card({
  pokemon,
  variants
}: {
  pokemon: IPokemonWithId
  variants: any
}) {
  return (
    <motion.div variants={variants} className={styles.card}>
      <motion.h3
        layoutId={`pokemonName${pokemon.name}`}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        {pokemon.name}
      </motion.h3>
      <PokemonImage pokemon={pokemon} height={120} width={120} />
      <p>#{pokemon.id}</p>

      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </motion.div>
  )
}
