import { getPokemons } from '@/services/getPokemons'
import { IPokemonWithId } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, useEffect, useState } from 'react'

interface IPokemonContext {
  pokemons: IPokemonWithId[] | []
  getMorePokemons: () => void
}

export const PokemonContext = createContext<IPokemonContext | null>(null)

export const PokemonProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  // const [pokes, setPokes] = useState<IPokemonWithId[] | []>([])
  const [offset, setOffset] = useState<number>(0)
  const [pokes, setPokes] = useState<IPokemonWithId[] | []>([])

  const { data, isLoading: isLoadingPokes } = useQuery(
    ['pokemons', offset],
    async (): Promise<IPokemonWithId[]> => {
      const newPokes = await getPokemons(12, offset)
      return newPokes
    },
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  )
  useEffect(() => {
    setPokes(prev => [...prev, ...(data ? data : [])])
  }, [data])

  const getMorePokemons = async () => {
    // const newPokes = await getPokemons(12, pokes?.length)

    // setPokes(pokemons => [...pokemons, ...newPokes])
    setOffset(prev => (pokes ? pokes.length : prev))
  }

  return (
    <PokemonContext.Provider value={{ pokemons: pokes ?? [], getMorePokemons }}>
      {children}
    </PokemonContext.Provider>
  )
}
