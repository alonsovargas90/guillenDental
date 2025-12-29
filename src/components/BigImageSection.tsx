'use client';

import * as React from 'react';
import { Box, Container } from '@mui/material';

type BigImageSectionProps = {
  src?: string;
  alt?: string;
};

export default function BigImageSection({
  src = 'https://picsum.photos/1600/900?random=99',
  alt = 'Imagen destacada'
}: BigImageSectionProps) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 14px 40px rgba(0,0,0,0.12)',
            height: { xs: 260, sm: 360, md: 520 }
          }}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
