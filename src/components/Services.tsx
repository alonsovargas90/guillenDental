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
    <Box py={8} px={2} bgcolor={'#BEBEBC'}>
      {/* Section Header */}
      <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" color={theme.palette.common.white} fontSize={{ xs: '38px', md: '48px' }} >
          {t('title')}
        </Typography>
        <Typography variant="h6" color={theme.palette.common.white} width={'80%'} fontSize={{ xs: '16px', md: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis sem bibendum turpis semper rutrum. Sed ornare nulla ac massa vehicula, nec auctor tellus dapibus. Donec bibendum, mi vitae commodo mattis, dui urna condimentum augue, sit amet gravida lectus metus non nunc. Mauris lacinia porta velit id finibus.
        </Typography>
        <Button
          component={Link}
          href={`/contact`}
          variant="text"
          sx={{
            p: 2,
            backgroundColor: theme.palette.brandTeal.main,
            color: theme.palette.common.white,
            fontWeight: 500,
            textTransform: 'none',
            fontSize: { xs: '0.9rem', md: '1.2rem' },
            '&:hover': {
              borderColor: `1px solid ${theme.palette.brandTeal.main}`,
              backgroundColor: theme.palette.common.white,
              color: theme.palette.brandTeal.main
            }
          }}
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
                <Box display="flex" justifyContent="center" mb={2}>
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
                  >
                    {item.service}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.primary}
                    sx={{
                      minHeight: 48,
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
