import { ProfessionalInChargeProps } from "@/types/types"
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Stack, Box, Avatar, Typography, IconButton, useTheme } from "@mui/material"
import { TiktokLogo } from "phosphor-react"

export default function ProfessionalInCharge({
  image,
  name,
  title,
  description,
  longDescription,
  invert = false,
  socialLinks
}: ProfessionalInChargeProps) {
  const theme = useTheme();

  return (
    <Box py={{ xs: 4, md: 6 }} px={{ xs: 2, md: 4 }}>
      <Stack
        gap={4}
        direction={{ xs: 'column', md: invert ? 'row-reverse' : 'row' }}
        alignItems="flex-start"
        sx={{ width: '100%' }}
      >
        {/* IMAGE BLOCK */}
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            flex: { xs: '1 1 auto', md: '1 1 60%' },
            width: '100%'
          }}
        >
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: '100%',
              maxWidth: 280,
              height: 'auto',
              aspectRatio: '3/4',
              borderRadius: 4,
              boxShadow: 3,
              objectFit: 'cover'
            }}
          />
        </Stack>

        {/* TEXT BLOCK */}
        <Stack
          sx={{
            flex: { xs: '1 1 auto', md: '1 1 100%' },
            width: '100%',
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color={theme.palette.brandTeal.main}
              sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}
            >
              {name}
            </Typography>

            <Typography
              variant="subtitle1"
              fontWeight="medium"
              color="text.secondary"
              sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              color="text.primary"
              sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}
            >
              {description}
            </Typography>

            {Array.isArray(longDescription) ? (
              longDescription.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  color="text.secondary"
                  paragraph
                  sx={{ whiteSpace: 'pre-line', fontSize: { xs: '0.9rem', md: '1rem' } }}
                >
                  {paragraph}
                </Typography>
              ))
            ) : longDescription ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: 'pre-line', fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                {longDescription}
              </Typography>
            ) : null}

            {socialLinks && (
              <Stack direction="row" spacing={1} mt={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {socialLinks.facebook && (
                  <IconButton component="a" href={socialLinks.facebook} target="_blank">
                    <Facebook sx={{ color: theme.palette.brandTeal.main }} />
                  </IconButton>
                )}
                {socialLinks.instagram && (
                  <IconButton component="a" href={socialLinks.instagram} target="_blank">
                    <Instagram sx={{ color: theme.palette.brandTeal.main }} />
                  </IconButton>
                )}
                {socialLinks.linkedin && (
                  <IconButton component="a" href={socialLinks.linkedin} target="_blank">
                    <LinkedIn sx={{ color: theme.palette.brandTeal.main }} />
                  </IconButton>
                )}
                {socialLinks.tiktok && (
                  <IconButton component="a" href={socialLinks.tiktok} target="_blank">
                    <TiktokLogo style={{ color: theme.palette.brandTeal.main }} />
                  </IconButton>
                )}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
