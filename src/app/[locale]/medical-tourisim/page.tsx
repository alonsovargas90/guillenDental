'use client';

import {
  Box,
  Typography,
  Grid,
  Stack,
  useTheme,
  Container
} from '@mui/material';
import { useTranslations } from 'next-intl';

export default function MedicalTourismPage() {
  const t = useTranslations('medicalTourism');
  const theme = useTheme();

  const sections = [
    {
      title: t('whyTitle'),
      text: t('whyText')
    },
    {
      title: t('healthcareTitle'),
      text: t('healthcareText')
    },
    {
      title: t('growthTitle'),
      text: t('growthText')
    },
    {
      title: t('proceduresTitle'),
      text: t('proceduresIntro')
    }
  ];

  const procedures = [
    {
      title: t('dentistryTitle'),
      text: t('dentistryText')
    },
    {
      title: t('orthopedicsTitle'),
      text: t('orthopedicsText')
    },
    {
      title: t('cosmeticTitle'),
      text: t('cosmeticText')
    },
    {
      title: t('stemCellsTitle'),
      text: t('stemCellsText')
    }
  ];

  return (
    <Box py={{ xs: 6, md: 10 }} px={2} bgcolor={theme.palette.background.default}>
      <Container maxWidth="lg">
        <Stack spacing={4} textAlign="center" alignItems="center" mb={8}>
          <Typography variant="h1" color={theme.palette.brandGreen.main}>
            {t('title')}
          </Typography>
           <Typography variant="h3" color={theme.palette.brandGreen.main}>
            {t('subtitle')}
          </Typography>
          <Typography variant="h2" color="text.primary">
            {t('intro')}
          </Typography>
        </Stack>

        <Stack spacing={6}>
          {sections.map((section, index) => (
            <Box key={index}>
              <Typography variant="h4" color={theme.palette.brandTeal.main} gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {section.text}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box mt={10}>
          <Typography variant="h4" color={theme.palette.brandTeal.main} gutterBottom>
            {t('proceduresTitle')}
          </Typography>
          <Typography variant="body1" mb={6}>
            {t('proceduresIntro')}
          </Typography>
          <Grid container spacing={4}>
            {procedures.map((proc, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: '#f9f9f9',
                    height: '100%',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <Typography
                    variant="h6"
                    color={theme.palette.brandGreen.main}
                    fontWeight={600}
                    gutterBottom
                  >
                    {proc.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {proc.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}