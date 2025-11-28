'use client';

import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { WHATSUP_NUMBER_LINK } from '@/constants/constants';

export default function PaymentFacilitiesBanner() {
  const theme = useTheme();
  const t = useTranslations('PaymentBanner');

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.brandTeal.main,
        minHeight: { xs: 300, md: 450 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <Image
          src="/formas-de-pago.jpg"
          alt="Invisalign"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Content */}
      <Stack
        zIndex={1}
        textAlign="center"
        justifyContent='center'
        maxWidth="800px"
        spacing={2}
        sx={{ color: theme.palette.brandGreen.contrastText }}
      >
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '2px',
            lineHeight: 1,
          }}
        >
          <Typography
            component="span"
            variant="h3"
            fontWeight="bold"
            fontSize={{ xs: '2rem', md: '3rem' }}
            marginRight={'8px'}
          >
            {t('title')}
          </Typography>
        </Box>
        <Typography variant="body1">
          {t('description')}
        </Typography>
        <Stack justifyContent='center' alignItems='center'>
          <Button
            variant="outlined"
            color="primary"
            target='_blank'
            href={WHATSUP_NUMBER_LINK}
          >
            {t('cta')}
          </Button>
        </Stack>

      </Stack>
    </Box >
  );
}