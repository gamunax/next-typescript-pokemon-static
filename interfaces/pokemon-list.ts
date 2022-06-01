export interface PokemonListDto {
  count: number;
  next?: string;
  previous?: null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
}
