import '@mui/material/styles';

import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    brandYellow: Palette['primary'];
    brandOlive: Palette['primary'];
    brandGray: Palette['primary'];
    brandGreen: Palette['primary'];
    brandTeal: Palette['primary'];
    invisalignSkyBlue: Palette['primary'];
    invisalignBlue: Palette['primary'];
  }

  interface PaletteOptions {
    brandYellow?: PaletteColorOptions;
    brandOlive?: PaletteColorOptions;
    brandGray?: PaletteColorOptions;
    brandGreen?: PaletteColorOptions;
    brandTeal?: PaletteColorOptions;
    invisalignSkyBlue?: PaletteColorOptions;
    invisalignBlue?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    brandYellow: true;
    brandOlive: true;
    brandGray: true;
    brandGreen: true;
    brandTeal: true;
    invisalignSkyBlue: true;
    invisalignBlue: true;
  }
}