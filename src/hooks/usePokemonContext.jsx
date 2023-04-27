import { useContext } from 'react'
import { PokemonContext } from '../store/PokemonContext'

export function usePokemonContext() {
  const context = useContext(PokemonContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
