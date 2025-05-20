'use client'

import { useTheme } from '@mui/material/styles'
import { Typography, Box, Stack } from '@mui/material'
interface HeroProps {
  greenTitle: string;
  blackTitle: string;
  image: string;
  flipImage?: boolean;
  backgroundPosition?: string;
  backgroundSize?: string;
  xl?: boolean;
}

export default function Hero({ greenTitle, blackTitle, image, backgroundPosition, backgroundSize, flipImage = false, xl= false }: HeroProps) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '250px', md: xl? '700px' : '500px' },
        padding: theme.spacingSystem.sm,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        overflow: 'hidden',
      }}
    >
      {/* Background image layer flipped */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: `#84C5AE`,
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${image})`,
          backgroundSize: backgroundSize ? backgroundSize : 'cover',
          backgroundPosition: backgroundPosition ? backgroundPosition : 'center',
          transform: flipImage ? 'scaleX(-1)' : '',
          zIndex: 0,
        }}
      />
      {/* Capa oscura encima de la imagen */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      />

      {/* Contenido centrado */}
      <Stack
        spacing={2}
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'left',
            fontFamily: '"Mazzard Soft", sans-serif',
            color: theme.palette.brandGreen?.main,
            fontWeight: 600,
          }}
        >
          {greenTitle}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            textShadow: '0 1px 3px rgba(0,0,0,0.4)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          }}
        >
          {blackTitle}
        </Typography>
      </Stack>
    </Box>
  )
}