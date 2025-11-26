'use client'

import FAQSection from '@/components/FAQ'
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
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            {tAbout('Title')}
          </Typography>

          <Typography
            variant="body1"
            color={theme.palette.text.primary}
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            {tAbout('Description')}
          </Typography>

          <Typography
            variant="body1"
            color={theme.palette.text.primary}
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            {tAbout('Secondary_description')}
          </Typography>
        </Stack>
      </Container>

      <Container sx={{ px: { xs: 2, md: 0 }, m: '0 auto !important' }}>
        <InfoSection
          image="/about/nuestra_cultura.jpeg"
          title={tAbout('Our Culture')}
          subtitle={tAbout('Who We Are')}
          content={tAbout('Cultura')}
          leftToRight={false}
        />
        <InfoSection
          image="/about/vision.jpeg"
          title={tAbout('Our Mission')}
          subtitle={tAbout('What Drives Us')}
          content={tAbout('Mission')}
          leftToRight={true}
        />
        <InfoSection
          image="/about/mision.jpeg"
          title={tAbout('Our Vison')}
          subtitle={tAbout('Where Were Going')}
          content={tAbout('Vision')}
          leftToRight={false}
        />
      </Container>
      <InvisalignBanner />
      <Container sx={{ px: { xs: 2, md: 0 }, m: '0 auto !important' }}>
        <FAQSection />
      </Container>
      <MapSection />
    </Stack>
  );
}