interface IPokemon {
  name: string
  url: string
}

export interface IPokemonWithId extends IPokemon {
  id: number
}
