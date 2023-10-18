import type { Pokemon } from '../types/pokemon';
import { fetchAPI } from '../utils/fetcher';

const BASE_URL = 'https://pokeapi.co/api/v2';

type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

export async function getPokemonList(page: number) {
  // Fixed the limit to 12 as mentioned in the FIGMA
  return await fetchAPI<PokemonListResponse>(`${BASE_URL}/pokemon?limit=12&offset=${page - 1}`);
}
