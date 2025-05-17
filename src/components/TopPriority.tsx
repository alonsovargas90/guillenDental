import { useTranslations } from 'next-intl';
import { Box, Typography, useTheme } from '@mui/material';

const TopPriority = () => {
  const t = useTranslations('TopPriority');
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/top-priority.png)', // Make sure this image is in your public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        px: 3,
        overflow: 'hidden',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <Box sx={{ maxWidth: '800px', zIndex: 2 }}>
        <Typography variant="h2" fontWeight="bold" mb={2} color={theme.palette.brandGreen.main} fontSize={{ xs: '38px', md: '48px' }}>
          {t('title')}
        </Typography>
        <Typography variant="h2" fontWeight="bold" mb={2} color={theme.palette.brandYellow.main} fontSize={{ xs: '38px', md: '48px' }}> {t('title2')}</Typography>
        <Typography variant="body1">{t('description')}</Typography>
      </Box>
    </Box>
  );
};

export default TopPriority;