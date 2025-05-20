import { createTheme } from '@mui/material/styles';
import { spacingSystem } from './spacingSystem';

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
      main: '#A4BFD1',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#333',
    },
  },
  shape: { borderRadius: 8 },
  spacingSystem,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: '3.75rem',  // 60px
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',     // 48px
      lineHeight: 1.25,
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.25rem',  // 36px
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',  // 28px
      lineHeight: 1.35,
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',   // 24px
      lineHeight: 1.4,
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',  // 20px
      lineHeight: 1.5,
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: '1.125rem', // 18px
      lineHeight: 1.5,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '1rem',     // 16px
      lineHeight: 1.5,
      fontWeight: 400,
    },

    body1: {
      fontSize: '1rem',     // 16px
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.43,
      fontWeight: 400,
    },

    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: 600,
      textTransform: 'none',
      lineHeight: 1.5,
    },

    caption: {
      fontSize: '0.75rem',  // 12px
      lineHeight: 1.35,
      fontWeight: 400,
    },

    overline: {
      fontSize: '0.75rem',  // 12px
      lineHeight: 2,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  }
});