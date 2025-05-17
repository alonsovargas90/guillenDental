import { useTheme, useMediaQuery } from '@mui/material';

export function useIsDesktop(breakpoint: 'sm' | 'md' | 'lg' | 'xl' = 'md') {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(breakpoint));
  return { isDesktop, isMobile: !isDesktop };
}