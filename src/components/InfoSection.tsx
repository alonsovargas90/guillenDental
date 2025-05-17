'use client'

import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material'
import Image from 'next/image'

interface InfoSectionProps {
  image: string
  title: string
  subtitle: string
  content: string
  leftToRight?: boolean
}

const InfoSection = ({ image, title, subtitle, content, leftToRight = true }: InfoSectionProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const direction = isMobile ? 'column' : leftToRight ? 'row' : 'row-reverse'

  return (
    <Box py={{ xs: 6, md: 8 }} px={{ xs: 2, md: 6 }} bgcolor="white">
      <Stack
        direction={direction}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* IMAGE */}
        <Box
          sx={{
            flex: '1 1 50%',
            width: '100%',
            aspectRatio: { xs: '4 / 3', md: '4 / 3' },
            position: 'relative',
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: 'cover',
              borderRadius: 12,
            }}
          />
        </Box>

        {/* TEXT */}
        <Stack
          flex="1 1 50%"
          spacing={2}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.brandTeal.main}
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            {title}
          </Typography>

          <Typography
            variant="subtitle1"
            color={theme.palette.brandTeal.main}
            sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
          >
            {subtitle}
          </Typography>

          <Typography
            variant="body1"
            color={theme.palette.brandTeal.main}
            sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}
          >
            {content}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default InfoSection
