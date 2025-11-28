'use client'

import Hero from '@/components/hero'
import InvisalignBanner from '@/components/InvisalignBanner'
import { theme } from '@/theme/theme'
import { Box, Container, Stack, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const CompareImage = dynamic(() => import('react-compare-image'), { ssr: false })

export default function Home() {
  const tHero = useTranslations('hero');
  const tBeforeAfter = useTranslations('beforeAfterPage');

  return (
    <Stack spacing={6}>
      <Hero
        greenTitle={tHero('greenTitle')}
        blackTitle={tHero('blackTitle')}
        image={'/hero.png'}
        flipImage
        backgroundPosition={'0% 20%'}
      />

      <Box
        flex={1}
        sx={{
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          mt: { xs: 4, md: 0 },
          '& img': {
            width: '100% !important',
            height: 'auto !important',
          },
        }}
      >
      </Box>

      <Container sx={{ px: { xs: 2, md: 0 }, m: '0 auto !important' }}>
        <Stack spacing={4}>
          {/* Title and description */}
          <Typography variant="h3" fontWeight="bold" textAlign="center" fontSize={{ xs: '38px', md: '48px' }} color={theme.palette.brandGreen?.main}>
            {tBeforeAfter('Title')}
          </Typography>
          <Typography variant="h5" textAlign="center" color={theme.palette.brandGray.main}>
            {tBeforeAfter('Description')}
          </Typography>
          {/* CompareImage gallery */}
          <Stack gap={'50px'}>
            {Array.from({ length: 7 }, (_, n) => {
              const sections = tBeforeAfter.raw('Sections');
              const currentSection = sections.find((s: any) => s.range.includes(n));
              const isFirstInSection = currentSection?.range[0] === n;

              return (
                <Box key={n}>
                  {isFirstInSection && (
                    <>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        color={theme.palette.brandGreen?.main}
                      >
                        {currentSection?.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        textAlign="center"
                        color={theme.palette.brandGray.main}
                        mb={4}
                      >
                        {currentSection?.description}
                      </Typography>
                    </>
                  )}

                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 600,
                      mx: 'auto',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '50px',
                      '& .react-compare-image img': {
                        objectFit: 'cover',
                        height: { xs: '400px', md: '500px' },
                        width: '100%',
                      },
                      '& .react-compare-image': {
                        height: { xs: '400px', md: '500px' },
                      },
                    }}
                  >
                    <CompareImage
                      leftImage={`/before-after/casos/caso ${n + 1}/antes.jpeg`}
                      rightImage={`/before-after/casos/caso ${n + 1}/despues.jpeg`}
                      leftImageLabel="Before"
                      rightImageLabel="After"
                      sliderLineColor={theme.palette.brandTeal?.main}
                    />
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
      <InvisalignBanner />
    </Stack>
  )
}
