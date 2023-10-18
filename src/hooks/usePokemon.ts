import { useQuery } from '@tanstack/react-query';
import { getPokemonList } from '../apis/pokemon';

export const usePokemon = (page: number) => {
  const { data } = useQuery({
    queryKey: ['pokemon-list', page],
    queryFn: () => getPokemonList(page),
  });

  return {
    data,
  };
};
