'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  useTheme,
  Button,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PhotoProvider, PhotoView } from 'react-photo-view';

type StatItem = {
  value: string; // "255+"
  title: string;
  description: string;
};

type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type DataAndGalleryComponentProps = {
  photos?: GalleryPhoto[];
  stats?: StatItem[];
};

type Tile = {
  colSpan: number;
  rowSpan: number;
};

const MotionBox = motion(Box);

// Patrón estético “editorial” (mosaico controlado)
const TILES: Tile[] = [
  { colSpan: 4, rowSpan: 6 }, // grande
  { colSpan: 4, rowSpan: 3 },
  { colSpan: 4, rowSpan: 3 },
  { colSpan: 3, rowSpan: 3 },
  { colSpan: 5, rowSpan: 3 },
  { colSpan: 4, rowSpan: 3 },
  { colSpan: 4, rowSpan: 3 }
];

const defaultPhotos: GalleryPhoto[] = [
  { src: 'https://picsum.photos/800/600?random=1', width: 800, height: 600, alt: 'Recepción moderna' },
  { src: 'https://picsum.photos/600/900?random=2', width: 600, height: 900, alt: 'Área de atención' },
  { src: 'https://picsum.photos/900/600?random=3', width: 900, height: 600, alt: 'Equipo profesional' },
  { src: 'https://picsum.photos/700/800?random=4', width: 700, height: 800, alt: 'Sala de espera' },
  { src: 'https://picsum.photos/1200/800?random=5', width: 1200, height: 800, alt: 'Consultorio moderno' },
  { src: 'https://picsum.photos/800/1000?random=6', width: 800, height: 1000, alt: 'Recepción y área de descanso' },
  { src: 'https://picsum.photos/1000/700?random=7', width: 1000, height: 700, alt: 'Pasillo principal' },
   { src: 'https://picsum.photos/1200/800?random=5', width: 1200, height: 800, alt: 'Consultorio moderno' },
   { src: 'https://picsum.photos/800/1000?random=6', width: 800, height: 1000, alt: 'Recepción y área de descanso' },
  { src: 'https://picsum.photos/1000/700?random=7', width: 1000, height: 700, alt: 'Pasillo principal' }
];

const defaultStats: StatItem[] = [
  { value: '255+', title: 'Pacientes felices', description: 'Atendidos con excelencia y calidez.' },
  { value: '255+', title: 'Casos exitosos', description: 'Resultados consistentes y medibles.' },
  { value: '255+', title: 'Procedimientos', description: 'Tecnología moderna y protocolos claros.' },
  { value: '255+', title: 'Reseñas', description: 'Experiencias positivas verificadas.' }
];

export default function DataAndGalleryComponent({
  photos = defaultPhotos,
  stats = defaultStats
}: DataAndGalleryComponentProps) {
  const theme = useTheme();
  const t = useTranslations('dataGallery');

  const leftColRef = React.useRef<HTMLDivElement | null>(null);
  const [leftColHeight, setLeftColHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!leftColRef.current) return;

    const el = leftColRef.current;

    const update = () => {
      const h = el.getBoundingClientRect().height;
      setLeftColHeight(h > 0 ? Math.round(h) : null);
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 1.2, fontWeight: 700, color: theme.palette.text.secondary }}
          >
            {t('header')}
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontWeight: 800, lineHeight: 1.05, color: theme.palette.text.primary }}
          >
            {t('title')}
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 760, color: theme.palette.text.secondary }}>
            {t('description')}
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* Cards (40%) */}
          <Grid size={{ xs: 12, md: 4.8 }}>
            <Box ref={leftColRef}>
              <Stack sx={{ height: '100%' }} spacing={2}>
                <Grid container spacing={2}>
                  {stats.slice(0, 4).map((item, idx) => (
                    <Grid key={`${item.title}-${idx}`} size={{ xs: 12, sm: 6, md: 6 }}>
                      <MotionBox whileHover={{ y: -3 }} transition={{ duration: 0.2 }} sx={{ height: '100%' }}>
                        <Card
                          elevation={0}
                          sx={{
                            height: '100%',
                            borderRadius: 1,
                            border: `1px solid ${theme.palette.divider}`,
                            background: theme.palette.background.paper
                          }}
                        >
                          <CardContent sx={{ p: 2.25 }}>
                            <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1, mb: 0.75 }}>
                              {item.value}
                            </Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>
                              {item.title}
                            </Typography>

                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </MotionBox>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 'auto', pt: 1 }}>
                  <Button variant="contained" fullWidth>
                    Contactar
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Mosaico (60%) - alineado a la altura de la izquierda */}
          <Grid size={{ xs: 12, md: 7.2 }}>
            <Box
              sx={{
                borderRadius: 1,
                overflow: 'hidden',
                height: { xs: 'auto', md: leftColHeight ? `${leftColHeight}px` : 'auto' }
              }}
            >
              <PhotoProvider>
                <Box
                  sx={{
                    display: 'grid',
                    gap: 1.5,

                    // 12 columnas en md+ para control editorial, 6 en mobile
                    gridTemplateColumns: { xs: 'repeat(6, 1fr)', md: 'repeat(12, 1fr)' },

                    // Ajusta esta “unidad” para cambiar look (más grande = menos tiles visibles)
                    gridAutoRows: { xs: 80, md: 22 },

                    alignContent: 'start',
                    overflow: { xs: 'visible', md: 'hidden' }
                  }}
                >
                  {photos.map((p, i) => {
                    const tile = TILES[i % TILES.length];

                    // Mobile: más simple/estable
                    const mobileColSpan = tile.colSpan >= 4 ? 6 : 3;
                    const mobileRowSpan = tile.rowSpan >= 4 ? 6 : 4;

                    return (
                      <MotionBox
                        key={`${p.src}-${i}`}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.25 }}
                        sx={{
                          gridColumn: { xs: `span ${mobileColSpan}`, md: `span ${tile.colSpan}` },
                          gridRow: { xs: `span ${mobileRowSpan}`, md: `span ${tile.rowSpan}` },
                          borderRadius: 1,
                          overflow: 'hidden',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
                          backgroundColor: theme.palette.background.paper
                        }}
                      >
                        <PhotoView src={p.src}>
                          <Box
                            component="img"
                            src={p.src}
                            alt={p.alt}
                            sx={{
                              width: '100%',
                              height: '100%',
                              display: 'block',
                              cursor: 'pointer',

                              // “mosaico” premium: llena el espacio
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                          />
                        </PhotoView>
                      </MotionBox>
                    );
                  })}
                </Box>
              </PhotoProvider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
