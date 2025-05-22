import { createTheme } from '@mui/material/styles';
import { spacingSystem } from './spacingSystem';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#829B57', // Green from logo
    },
    secondary: {
      main: '#708D7B', // Teal from logo
    },
    brandYellow: {
      main: '#C0BB55',
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
      main: '#839c58',
      contrastText: '#fff',
    },
    brandTeal: {
      main: '#718E7C',
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: '60px',  // 60px
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          textTransform: 'none',
          fontSize: '0.9rem',
          padding: theme.spacing(2),
          backgroundColor: theme.palette.brandTeal.main,
          color: theme.palette.common.white,
          borderRadius: theme.shape.borderRadius,
          border: `1px solid transparent`,
          '&:hover': {
            border: `1px solid ${theme.palette.brandTeal.main}`,
            backgroundColor: theme.palette.common.white,
            color: theme.palette.brandTeal.main,
          },
          transition: 'all 0.2s ease-in-out',
        }),
      },
       variants: [
      {
        props: { variant: 'contained' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.brandTeal.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.brandTeal.main,
            border: `1px solid ${theme.palette.brandTeal.main}`,
          },
        }),
      },
      {
        props: { variant: 'text' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          color: theme.palette.brandTeal.main,
          border: `transparent`,
          '&:hover': {
             border: `transparent`,
            backgroundColor: theme.palette.brandTeal.main,
            color: theme.palette.common.white,
          },
        }),
      },
    ],
    },
  }
});

baseTheme.typography = {
  ...baseTheme.typography,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '40px', // mobile
    lineHeight: 1.2,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    [baseTheme.breakpoints.up('sm')]: {
      fontSize: '48px', // +8
    },
    [baseTheme.breakpoints.up('md')]: {
      fontSize: '60px', // +12
    },
  },
  h2: {
    fontSize: '32px', // mobile
    lineHeight: 1.25,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    [baseTheme.breakpoints.up('sm')]: {
      fontSize: '40px',
    },
    [baseTheme.breakpoints.up('md')]: {
      fontSize: '48px',
    },
  },
  h3: {
    fontSize: '24px',
    lineHeight: 1.3,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    [baseTheme.breakpoints.up('sm')]: {
      fontSize: '32px',
    },
    [baseTheme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
  },
  h4: {
    fontSize: '20px',
    lineHeight: 1.35,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    [baseTheme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
    [baseTheme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
  h5: {
    fontSize: '16px',
    lineHeight: 1.4,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    [baseTheme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    [baseTheme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },
  h6: {
    fontSize: '14px',
    lineHeight: 1.5,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    [baseTheme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [baseTheme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },

  subtitle1: {
    fontSize: '18px',
    lineHeight: 1.5,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
  },
  subtitle2: {
    fontSize: '16px',
    lineHeight: 1.5,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
  },
  body1: {
    fontSize: '16px',
    lineHeight: 1.5,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
  },
  body2: {
    fontSize: '14px',
    lineHeight: 1.43,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
  },
  button: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    lineHeight: 1.5,
    fontFamily: baseTheme.typography.fontFamily,
  },
  caption: {
    fontSize: '12px',
    lineHeight: 1.35,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
  },
  overline: {
    fontSize: '12px',
    lineHeight: 2,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontFamily: baseTheme.typography.fontFamily,
  },
};

export const theme = baseTheme;