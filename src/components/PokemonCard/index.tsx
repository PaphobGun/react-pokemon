import { Box, Heading, HStack, Image } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '../../utils/wording';

export type PokemonCardProps = {
  id: string;
  name: string;
};

export const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { id, name } = props;

  return (
    <Box border="1px solid #E2E1E5" p="16px" borderRadius={10} backgroundColor="#FDFDFD">
      <HStack>
        <Box w="72px" h="72px" borderRadius={99} backgroundColor="#EBEBEB">
          <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        </Box>
        <Heading fontSize={20} fontWeight={500}>
          {capitalizeFirstLetter(name)}
        </Heading>
      </HStack>
    </Box>
  );
};
