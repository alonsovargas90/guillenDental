'use client';

import {
  Stack,
  Link,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Services() {
  const t = useTranslations('OurServices');
  const theme = useTheme();
  const services = t.raw('list') as {
    service: string;
    date: string;
    img: string;
    link: string;
  }[];

  return (
    <Box py={8} px={2}>
      {/* Section Header */}
      <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" fontSize={{ xs: '38px', md: '48px' }} >
          {t('title')}
        </Typography>
        <Typography variant="h6" width={'80%'} fontSize={{ xs: '16px', md: '20px' }}>
         {t('subtitle')}
        </Typography>
        <Button
          component={Link}
          href={`/contact`}
          variant="contained"
        >
          {t('cta')}
        </Button>
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
          <Box
            key={index}
            sx={{
              flex: '1 1 250px',
              display: 'flex',
              maxWidth: '250px',
              justifyContent: 'center',
            }}
          >
            <Link href={item.link} style={{ textDecoration: 'none' }}>
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
                  width: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 10px 20px ${theme.palette.brandTeal.main}55`
                  }
                }}
              >
                <Box display="flex" justifyContent="center" sx={{ height: 90}}>
                  <Image
                    src={item.img}
                    alt={item.service}
                    width={item.img.endsWith('.svg') ? 140 : 70}
                    height={item.img.endsWith('.svg') ? 90 : 70}
                  />
                </Box>

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={theme.palette.brandTeal.main}
                    gutterBottom
                    sx={{ marginBottom: 0}}
                  >
                    {item.service}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.primary}
                    sx={{
                      Height: 50,
                      verticalAlign: 'top',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.date}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
