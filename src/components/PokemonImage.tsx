import { IPokemonWithId } from '@/types/types'
import { motion } from 'framer-motion'

export const PokemonImage = ({
  pokemon,
  width,
  height
}: {
  pokemon: IPokemonWithId
  width: number
  height: number
}) => {
  return (
    <motion.img
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      width={width}
      height={height}
      alt={pokemon.name}
      layoutId={`pokemonImage${pokemon.name}`}
    />
  )
}
