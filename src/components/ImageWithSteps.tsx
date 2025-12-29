'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  Grid
} from '@mui/material';
import { useTranslations } from 'next-intl';

type ImageWithStepsProps = {
  imageSrc?: string;
  imageAlt?: string;
  reverseOnDesktop?: boolean; // por si quieres steps a la izquierda y foto a la derecha
};

export default function ImageWithSteps({
  imageSrc = '/images/aligners-steps.jpg',
  imageAlt = 'Alineadores - Proceso',
  reverseOnDesktop = false
}: ImageWithStepsProps) {
  const theme = useTheme();
  const t = useTranslations('imageWithSteps');

  const steps = [
    { title: t('steps.0.title'), description: t('steps.0.description') },
    { title: t('steps.1.title'), description: t('steps.1.description') },
    { title: t('steps.2.title'), description: t('steps.2.description') },
    { title: t('steps.3.title'), description: t('steps.3.description') }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="stretch"
          direction={{ xs: 'column', md: reverseOnDesktop ? 'row-reverse' : 'row' }}
        >
          {/* Imagen grande */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                height: { xs: 260, sm: 360, md: '100%' },
                minHeight: { md: 420 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 14px 40px rgba(0,0,0,0.12)',
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={imageAlt}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </Box>
          </Grid>

          {/* Steps */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={1.5} sx={{ height: '100%' }}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: 1.2,
                  fontWeight: 800,
                  color: theme.palette.text.secondary
                }}
              >
                {t('header')}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.05,
                  color: theme.palette.text.primary
                }}
              >
                {t('title')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 520,
                  mb: 1
                }}
              >
                {t('description')}
              </Typography>

              <Box sx={{ mt: 1 }}>
                <Stepper orientation="vertical" nonLinear>
                  {steps.map((s) => (
                    <Step key={s.title} active>
                      <StepLabel
                        optional={
                          <Typography
                            variant="body2"
                            sx={{ color: theme.palette.text.secondary, mt: 0.25 }}
                          >
                            {s.description}
                          </Typography>
                        }
                        sx={{
                          '& .MuiStepLabel-label': {
                            fontWeight: 900,
                            color: theme.palette.text.primary
                          },
                          '& .MuiStepIcon-root': {
                            color: theme.palette.text.secondary
                          },
                          '& .MuiStepIcon-text': {
                            fill: theme.palette.background.paper
                          }
                        }}
                      >
                        {s.title}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              {/* Espaciador para que “respire” en desktop */}
              <Box sx={{ flex: 1 }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
