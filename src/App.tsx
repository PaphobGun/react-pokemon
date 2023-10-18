import { Box, Container, HStack, Heading, Radio, RadioGroup, Grid, GridItem } from '@chakra-ui/react';
import { usePokemon } from './hooks/usePokemon';
import { PokemonCard } from './components/PokemonCard';

function App() {
  const { data } = usePokemon(1);
  console.log({ data });
  return (
    <Box py="164px">
      <Container maxW="1311px">
        <HStack mb="32px">
          <Heading fontWeight={500} fontSize={32} mr="auto">
            All the Pokemon!
          </Heading>
          <RadioGroup>
            <HStack>
              <Radio>Sort Name</Radio>
              <Radio>Sort ID</Radio>
            </HStack>
          </RadioGroup>
        </HStack>
        <Grid templateColumns="repeat(4, 1fr)" gap="16px">
          {data?.results?.map?.((pokemon, index) => (
            <GridItem key={index}>
              <PokemonCard pokemon={pokemon} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
