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
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export async function getStaticProps() {
  const data = await getPokemons(100)

  return {
    props: {
      pokemons: data
    }
  }
}
export default function Home({ pokemons }: { pokemons: IPokemonWithId[] }) {
  const [pokes, setPokes] = useState(pokemons)

  const getMorePokemons = async () => {
    const newPokes = await getPokemons(12, pokes.length)

    setPokes(pokes => [...pokes, ...newPokes])
  }

  const variants = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.01
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
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
      {/* <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className={styles.pokemonContainer}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} variants={itemVariants} />
        ))}
      </motion.div> */}
      <InfiniteScroll
        dataLength={pokes.length}
        next={getMorePokemons}
        hasMore={true}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
        className={styles.pokemonContainer}>
        {pokes.map(poke => (
          <Card key={poke.id} pokemon={poke} variants={itemVariants} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

