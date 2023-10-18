import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `'Encode Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#F6F6F7',
      },
    }),
  },
  colors: {
    neutral: '#F6F6F7',
  },
});
