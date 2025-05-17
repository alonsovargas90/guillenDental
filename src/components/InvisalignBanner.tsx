'use client';

import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function InvisalignBanner() {
  const theme = useTheme();
  const t = useTranslations('InvisalignBanner');

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
          src="/Invisalign-banner.jpg"
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
            {t('title')}{' '}
          </Typography>
          <Typography
            component="span"
            variant="h3"
            fontWeight="bold"
            color={theme.palette.invisalignSkyBlue.main}
            fontSize={{ xs: '2rem', md: '3rem' }}
          >
            {t('invis')}
          </Typography>
          <Typography
            component="span"
            variant="h3"
            fontWeight="bold"
            color={theme.palette.invisalignBlue.main}
            fontSize={{ xs: '2rem', md: '3rem' }}
          >
            {t('align')}
          </Typography>
          <sup style={{
            fontSize: '1em',
            lineHeight: 1,
            color: theme.palette.invisalignBlue.main,
            top: '0',
            position: 'relative'
          }}>
            ®
          </sup>
        </Box>
        <Typography variant="body1">
          {t('description')}
        </Typography>
        <Stack justifyContent='center' alignItems='center'>
          <Button
            variant="contained"
            color="primary"
            href="#Contact"
            sx={{
              p: 2,
              backgroundColor: theme.palette.brandTeal.main,
              color: theme.palette.common.white,
              fontWeight: 500,
              textTransform: 'none',
              width: 'fit-content',
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

      </Stack>
    </Box >
  );
}