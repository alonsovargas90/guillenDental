'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { ServiceInfo } from '@/types/types';

interface ServiceInfoProps {
  serviceInfo: ServiceInfo;
}

export default function ServiceInformation({ serviceInfo }: ServiceInfoProps) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box py={8}>
      <Container maxWidth="lg">
        {/* Top Section: Introduction + Images */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Text column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="h2" fontWeight={700} gutterBottom>
                {serviceInfo.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {serviceInfo.description}
              </Typography>
            </Box>
          </Grid>

          {/* Image column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                display: 'flex',
                height: '100%',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: isMdUp ? 'flex-end' : 'center',
                alignItems: 'stretch',
              }}
            >
              {[serviceInfo.image1, serviceInfo.image2, serviceInfo.image3].map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: '1 1 30%',
                    minWidth: '120px',
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    aspectRatio: '3 / 4',
                    backgroundColor: '#eee',
                  }}
                >
                  <Image
                    src={src}
                    alt={`Service image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Cards Section */}
        <Box mt={8}>
          <Grid container spacing={4}>
            {serviceInfo.cards.map((card, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    backgroundColor: theme.palette.background.paper,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.subtitle}
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