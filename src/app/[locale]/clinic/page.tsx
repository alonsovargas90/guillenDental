'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import PhotoAlbum from 'react-photo-album';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-album/styles.css';
import 'react-photo-view/dist/react-photo-view.css';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import InvisalignBanner from '@/components/InvisalignBanner';

const photos = [
  { src: 'https://picsum.photos/800/600?random=1', width: 800, height: 600, alt: 'Recepción moderna' },
  { src: 'https://picsum.photos/600/900?random=2', width: 600, height: 900, alt: 'Área de atención' },
  { src: 'https://picsum.photos/900/600?random=3', width: 900, height: 600, alt: 'Equipo profesional' },
  { src: 'https://picsum.photos/700/800?random=4', width: 700, height: 800, alt: 'Sala de espera' },
  { src: 'https://picsum.photos/1200/800?random=5', width: 1200, height: 800, alt: 'Consultorio moderno' },
  { src: 'https://picsum.photos/800/1000?random=6', width: 800, height: 1000, alt: 'Recepción y área de descanso' },
  { src: 'https://picsum.photos/1000/700?random=7', width: 1000, height: 700, alt: 'Pasillo principal' },
];

export default function ImageGallery() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 8,
        textAlign: 'center'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: theme.palette.text.primary
        }}
      >
        Galería de nuestra clínica
      </Typography>

      <PhotoProvider>
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          renderPhoto={({ imageProps }) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden', borderRadius: 12, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            >
              <PhotoView src={imageProps.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  {...imageProps}
                  alt={imageProps.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                />
              </PhotoView>
            </motion.div>
          )}
        />
      </PhotoProvider>
      <InvisalignBanner />
      <Container sx={{ px: { xs: 2, md: 0 }, m: '0 auto !important' }}>
              <FAQSection />
            </Container>
       <MapSection />
    </Box>
  );
}
