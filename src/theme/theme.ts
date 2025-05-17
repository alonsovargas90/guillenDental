import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#829B57', // Green from logo
    },
    secondary: {
      main: '#708D7B', // Teal from logo
    },
    brandYellow: {
      main: '#E3CE59',
      contrastText: '#000',
    },
    brandOlive: {
      main: '#B5B553',
      contrastText: '#000',
    },
    brandGray: {
      main: '#888A89',
      contrastText: '#fff',
    },
    brandGreen: {
      main: '#829B57',
      contrastText: '#fff',
    },
    brandTeal: {
      main: '#708D7B',
      contrastText: '#fff',
    },
    invisalignBlue: {
      main: '#4F689B',
      contrastText: '#fff',
    },
    invisalignSkyBlue: {
      main:'#A4BFD1',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});