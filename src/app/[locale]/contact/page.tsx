'use client'

import Hero from '@/components/hero'
import HeroContact from '@/components/HeroContact'
import InfoSection from '@/components/InfoSection'
import InvisalignBanner from '@/components/InvisalignBanner'
import { theme } from '@/theme/theme'
import { Container, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

export default function Home() {
  const tHero = useTranslations('hero');
  const tAbout = useTranslations('AboutUsPage');
  const MapSection = dynamic(() => import('@/components/MapSection'), {
    ssr: false
  });

  return (
    <Stack spacing={6}>
      <Hero
        greenTitle={tHero('greenTitle')}
        blackTitle={tHero('blackTitle')}
        image={'/hero.png'}
        flipImage
        backgroundPosition={'0% 20%'}
      />

      <HeroContact />

      <Container sx={{ px: { xs: 2, md: 0 }, m: '0 auto !important' }}>
        <Stack
          spacing={4}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={theme.palette.brandTeal.main}
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            {tAbout('Title')}
          </Typography>

          <Typography
            variant="h6"
            color={theme.palette.text.primary}
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            {tAbout('Description')}
          </Typography>

          <Typography
            variant="body1"
            color={theme.palette.text.secondary}
            sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            {tAbout('Secondary_description')}
          </Typography>
        </Stack>
      </Container>

      <Container sx={{ px: { xs: 2, md: 0 }, m: '0 auto !important' }}>
        <InfoSection
          image="/about/nuestra_cultura.jpeg"
          title="Our Culture"
          subtitle="Who We Are"
          content={tAbout('Cultura')}
          leftToRight={false}
        />
        <InfoSection
          image="/about/vision.jpeg"
          title="Our Mission"
          subtitle="What Drives Us"
          content={tAbout('Mission')}
          leftToRight={true}
        />
        <InfoSection
          image="/about/mision.jpeg"
          title="Our Vision"
          subtitle="Where We’re Going"
          content={tAbout('Vision')}
          leftToRight={false}
        />
      </Container>

      <InvisalignBanner />
      <MapSection />
    </Stack>
  );
}