'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';

type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Tile = {
  colSpan: number;
  rowSpan: number;
};

type PhotoMosaicGridProps = {
  photos: GalleryPhoto[];
  height?: number | null; // alto objetivo (columna izquierda)
};

const MotionBox = motion(Box);

// Patrón estético (puedes ajustarlo). Suma visual tipo “editorial”.
const TILES: Tile[] = [
  { colSpan: 4, rowSpan: 6 }, // grande
  { colSpan: 4, rowSpan: 3 },
  { colSpan: 4, rowSpan: 3 },
  { colSpan: 3, rowSpan: 3 },
  { colSpan: 5, rowSpan: 3 },
  { colSpan: 4, rowSpan: 3 },
  { colSpan: 4, rowSpan: 3 }
];

export default function PhotoMosaicGrid({ photos, height }: PhotoMosaicGridProps) {
  // En desktop queremos 12 columnas para tener buen control de spans.
  // En mobile bajamos a 6.
  return (
    <Box
      sx={{
        borderRadius: 1,
        overflow: 'hidden',
        height: { xs: 'auto', md: height ? `${height}px` : 'auto' }
      }}
    >
      <PhotoProvider>
        <Box
          sx={{
            display: 'grid',
            gap: 1.5,
            // 12 columnas en md+ (mosaico pro), 6 columnas en mobile
            gridTemplateColumns: { xs: 'repeat(6, 1fr)', md: 'repeat(12, 1fr)' },

            // Altura por fila (esto define el “mosaico”)
            // Ajusta 18/20/22 según el look que quieras.
            gridAutoRows: { xs: 80, md: 22 },

            // ✅ rellena el alto disponible sin “reflow” raro
            alignContent: 'start',

            // Si está fijo el alto, evita que se salga
            overflow: { xs: 'visible', md: 'hidden' },

            p: 0
          }}
        >
          {photos.map((p, i) => {
            const tile = TILES[i % TILES.length];

            // En mobile hacemos tiles más simples (2 columnas)
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
                  backgroundColor: 'background.paper'
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

                      // ✅ look premium “editorial”
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
  );
}
