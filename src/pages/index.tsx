// next components
import Image from 'next/image'
// styles
import styles from '../styles/Home.module.sass'
// bibs
import axios from 'axios'
// components
import Card from '@/components/card/Card'
// types
import { IPokemonWithId } from '@/types/types'
import { getPokemons } from '@/services/getPokemons'
// animations
import { motion } from 'framer-motion'

export async function getStaticProps() {
  const data = await getPokemons()

  return {
    props: {
      pokemons: data.results
    }
  }
}
export default function Home({ pokemons }: { pokemons: IPokemonWithId[] }) {
  const variants = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.03
      }
    }
  }
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }
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
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className={styles.pokemonContainer}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} variants={itemVariants} />
        ))}
      </motion.div>
    </>
  )
}

