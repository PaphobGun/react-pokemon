import { Box, Container, HStack, Heading, Radio, RadioGroup, Text, SimpleGrid } from '@chakra-ui/react';
import { usePokemon } from './hooks/usePokemon';
import { PokemonCard } from './components/PokemonCard';
import { useState } from 'react';
import { Pokemon } from './types/pokemon';

type SortBy = 'id' | 'name';

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

function sortByName(a: Pokemon, b: Pokemon) {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
}

function sortByID(a: Pokemon, b: Pokemon) {
  const aID = Number(getPokemonId(a.url));
  const bID = Number(getPokemonId(b.url));

  if (aID < bID) {
    return -1;
  }

  if (aID > bID) {
    return 1;
  }

  return 0;
}

function App() {
  // state
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('id');

  // hook
  const { data } = usePokemon(page);

  const goToNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const backToPreviousPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <Box py="164px">
      <Container maxW="1311px">
        <HStack mb="32px">
          <Heading fontWeight={500} fontSize={32} mr="auto">
            All the Pokemon!
          </Heading>
          <RadioGroup value={sortBy} onChange={(value: SortBy) => setSortBy(value)}>
            <HStack>
              <Radio value="name">Sort Name</Radio>
              <Radio value="id">Sort ID</Radio>
            </HStack>
          </RadioGroup>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="16px">
          {data?.results?.sort?.(sortBy === 'id' ? sortByID : sortByName)?.map?.((pokemon, index) => (
            <PokemonCard key={index} name={pokemon.name} id={getPokemonId(pokemon.url) ?? ''} />
          ))}
        </SimpleGrid>
        <HStack mt="16px" color="#024E74" fontSize={16}>
          <Text cursor={page === 1 ? 'not-allowed' : 'pointer'} mr="auto" onClick={backToPreviousPage}>
            Previous 12
          </Text>
          <Text cursor="pointer" onClick={goToNextPage}>
            Next 12
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}

export default App;
