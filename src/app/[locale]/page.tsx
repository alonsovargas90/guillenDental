'use client'

import { Box, Typography } from '@mui/material'

export default function Home() {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
          zIndex: 1,
        }}
      />

      {/* Centered Content */}
      <Typography
        variant="h2"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          fontWeight: 700,
          px: 2,
        }}
      >
        {'Coming Soon'}
      </Typography>
    </Box>
  )
}