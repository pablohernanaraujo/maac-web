import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { colors } from './colors';
import { styles } from './styles';

export const theme = extendTheme(
  {
    styles,
    colors,
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
);
