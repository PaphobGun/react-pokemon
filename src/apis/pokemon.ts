import type { Pokemon } from '../types/pokemon';
import { fetchAPI } from '../utils/fetcher';

const BASE_URL = 'https://pokeapi.co/api/v2';

type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

// Fixed the limit to 12 as mentioned in the FIGMA
const MAX_SIZE = 12;

export async function getPokemonList(page: number) {
  return await fetchAPI<PokemonListResponse>(`${BASE_URL}/pokemon?limit=${MAX_SIZE}&offset=${(page - 1) * MAX_SIZE}`);
}
