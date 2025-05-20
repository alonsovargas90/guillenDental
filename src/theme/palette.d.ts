import '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // === Custom Colors ===
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

  // === Custom Spacing System ===
  interface Theme {
    spacingSystem: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }

  interface Theme {
    spacingSystem: typeof spacingSystem;
  }
  interface ThemeOptions {
    spacingSystem?: typeof spacingSystem;
  }
}

// === Button Color Overrides for Custom Colors ===
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