import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { Pokemon } from '../../types/pokemon';

export type PokemonCardProps = {
  pokemon: Pokemon;
};

function getPokemonId(url: string) {
  if (!url) {
    return;
  }

  // Example
  // https://pokeapi.co/api/v2/pokemon/10/
  const splitted = url.split('/');

  if (splitted.length < 2) {
    return;
  }

  // According to the API
  // ID will always be at the [length - 2] index
  return splitted[splitted.length - 2];
}

export const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { pokemon } = props;

  return (
    <Box border="1px solid #E2E1E5" p="16px" borderRadius={10}>
      <HStack>
        <Box w="72px" h="72px" borderRadius={99} backgroundColor="#EBEBEB">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
              pokemon.url
            )}.png`}
          />
        </Box>
        <Text>{pokemon.name}</Text>
      </HStack>
    </Box>
  );
};
