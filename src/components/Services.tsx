'use client';

import {
  Stack,
  Box,
  Typography,
  Card,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('OurServices');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = t.raw('list') as {
    service: string;
    date: string;
    img: string;
    link: string;
  }[];

  return (
    <Box py={8} px={2}>
      {/* Section Header */}
      <Stack spacing={2} alignItems="center" textAlign="center" mb={6} color={theme.palette.brandGreen?.main}>
        <Typography variant="h3" fontWeight="bold" fontSize={{ xs: '38px', md: '48px' }} >
          {t('title')}
        </Typography>
        <Typography variant="h6" width="80%" fontSize={{ xs: '16px', md: '20px' }}>
          {t('subtitle')}
        </Typography>
        <Link href="/contact" passHref>
          <Box component="button" sx={{
            backgroundColor: theme.palette.brandTeal.main,
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: theme.palette.brandTeal.dark || '#5f7866'
            }
          }}>
            {t('cta')}
          </Box>
        </Link>
      </Stack>

      {/* Services Grid */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        useFlexGap
        gap={4}
      >
        {services.map((item, index) => (
          <Link key={index} href={item.link} style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                perspective: isMobile ? 'none' : 1000,
                width: '250px',
                height: '300px'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  transform: isMobile ? 'rotateY(180deg)' : 'none',
                  '&:hover': {
                    transform: isMobile ? 'rotateY(180deg)' : 'rotateY(180deg)'
                  }
                }}
              >
                {/* Front Face - hidden on mobile */}
                {!isMobile && (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <CardContentComponent item={item} isFront />
                  </Box>
                )}

                {/* Back Face - always shown on mobile */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <CardContentComponent item={item} isFront={false} />
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

const CardContentComponent = ({
  item,
  isFront
}: {
  item: {
    service: string;
    date: string;
    img: string;
    link: string;
  };
  isFront: boolean;
}) => {
  const theme = useTheme();
  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        p: 3,
        borderRadius: 4,
        height: '100%',
        width: '100%'
      }}
    >
      <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Box sx={{ position: 'relative', height: 70, width: 70 }}>
          <Image src={item.img} alt={item.service} fill />
        </Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={theme.palette.brandTeal?.main}
          gutterBottom
          sx={{ marginBottom: 1 }}
        >
          {item.service}
        </Typography>
        {!isFront && (
          <Box
            color={theme.palette.text.primary}
            sx={{
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            {item.date.split('.').map((sentence, i) => {
              const trimmed = sentence.trim();
              return trimmed ? (
                <Typography
                  key={i}
                  variant="body2"
                  color={theme.palette.text.primary}
                  sx={{ lineHeight: 1.2 }}
                >
                  {trimmed}.
                </Typography>
              ) : null;
            })}
          </Box>
        )}
      </Stack>
    </Card>
  );
};
