import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: 'ewz.800',
      color: 'ewz.100',
    },
    a: {
      color: 'ewz.100',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
}

const colors = {
  ewz: {
    100: '#FFFFFF',
    200: '#C4C4C4',
    400: '#3D6CB9',
    500: '#17B978',
    700: '#242424',
    800: '#0F0F0F',
    900: '#000000'
  },
}
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

export const theme = extendTheme({ styles, colors, breakpoints })
