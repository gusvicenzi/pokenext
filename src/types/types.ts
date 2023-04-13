interface IPokemonType {
  type: {
    name: string
  }
}
interface IPokemon {
  name: string
  url: string
  types: IPokemonType[]
  height: number
  weight: number
}

export interface IPokemonWithId extends IPokemon {
  id: number
}
