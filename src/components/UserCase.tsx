'use client'

import { Stack, Typography, Box, useTheme } from '@mui/material'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

// Avoid SSR issues
const CompareImage = dynamic(() => import('react-compare-image'), { ssr: false })

const UserCase = () => {
    const theme = useTheme()
    const t = useTranslations('UserCase')

    return (
        <Box
            id="user-case"
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 6 },
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                justifyContent="center"
            >
                {/* TEXT BLOCK */}
                <Box flex={1} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                    <Typography
                        variant="overline"
                        color="primary"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                    >
                        {t('label')}
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                            textAlign: { xs: 'center', md: 'center' }
                        }}
                    >
                        {t('title')}
                    </Typography>

                    <Typography
                        variant="h4"
                        color={theme.palette.brandGray.main}
                        sx={{
                            textAlign: { xs: 'justify', md: 'justify' },
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            mb: 2,
                        }}
                    >
                        {t('description')}
                    </Typography>
                </Box>

                {/* IMAGE BLOCK */}
                <Box
                    flex={1}
                    sx={{
                        width: '100%',
                        maxWidth: 600,
                        mx: 'auto',
                        mt: { xs: 4, md: 0 },
                        '& img': {
                            width: '100% !important',
                            height: 'auto !important',
                        }
                    }}
                >
                    <CompareImage
                        leftImage="/before-after/home/before.jpeg"
                        rightImage="/before-after/home/after.jpeg"
                        leftImageLabel="Before"
                        rightImageLabel="After"
                        sliderLineColor={theme.palette.brandTeal?.main}
                    />
                </Box>
            </Stack>
        </Box>
    )
}

export default UserCase
