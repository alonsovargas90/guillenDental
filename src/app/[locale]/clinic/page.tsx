'use client';

import { Box, Container } from '@mui/material';
import FAQSection from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import { useTranslations } from 'next-intl';
import Hero from '@/components/hero';
import DataAndGalleryComponent from '@/components/DataAndGalleryComponent';
import InvisalignBanner from '@/components/InvisalignBanner';
import ImageWithSteps from '@/components/ImageWithSteps';
import BigImageSection from '@/components/BigImageSection';

export default function ClinicGalleryPage() {
  const tHero = useTranslations('hero');

  return (
    <Box sx={{ mt: 8 }}>
      {/* 1) Hero (ya lo tienes) */}
      <Hero
        greenTitle={tHero('greenTitle')}
        blackTitle={tHero('blackTitle')}
        image={'/hero.png'}
        flipImage
        backgroundPosition={'0% 20%'}
      />
      {/* 2) Segunda sección: Datos + Galería (nuevo componente) */}
      <DataAndGalleryComponent  />

       <BigImageSection src="https://picsum.photos/1600/900?random=101" alt="Clínica - imagen destacada" />

      <ImageWithSteps imageSrc='/hero.png'/>
      {/* 3) Resto de secciones que ya tenías */}
      <InvisalignBanner />

      <Container sx={{ px: { xs: 2, md: 0 }, my: { xs: 6, md: 8 } }}>
        <FAQSection />
      </Container>

      <MapSection />
    </Box>
  );
}