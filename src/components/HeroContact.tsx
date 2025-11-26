'use client'

import {
    Box,
    Typography,
    Link as MuiLink,
    Paper,
    Stack,
    useTheme,
    Grid
} from '@mui/material';
import { Email, WhatsApp, Room, Directions } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import {
    CONTACTUS_EMAIL,
    MAPS_DIRECTION,
    WAZE_DIRETION,
    WHATSUP_NUMBER,
    WHATSUP_NUMBER_LINK
} from '@/constants/constants';

export default function HeroContact() {
    const t = useTranslations('heroContact');
    const theme = useTheme();

    const items = [
        {
            icon: <Email fontSize="medium" />,
            title: t('emailTitle'),
            content: (
                <Typography variant="body2" mt={0.5} color={theme.palette.text.primary}>
                    <MuiLink href={`mailto:${CONTACTUS_EMAIL}`} underline="hover">
                        {CONTACTUS_EMAIL}
                    </MuiLink>
                </Typography>

            )
        },
        {
            icon: <WhatsApp fontSize="medium" />,
            title: t('whatsappTitle'),
            content: (
                <Box >
                    <Typography variant="body2" mt={0.5} color={theme.palette.text.primary}>
                        <MuiLink href={WHATSUP_NUMBER_LINK} underline="hover" target="_blank">
                            {WHATSUP_NUMBER}
                        </MuiLink>
                    </Typography>
                    <Typography variant="body2" mt={0.5} color={theme.palette.text.primary}>
                        {t('whatsappSchedule')}
                    </Typography>
                </Box>
            )
        },
        {
            icon: <Room fontSize="medium" />,
            title: t('addressTitle'),
            content:  (
                <Stack spacing={0.5}>
                    <Typography variant="body2" color={theme.palette.text.primary}>
                        <MuiLink href={MAPS_DIRECTION} target="_blank" underline="hover">
                            {t('addressText')}
                        </MuiLink>
                    </Typography>

                </Stack>
            )
        },
        {
            icon: <Directions fontSize="medium" />,
            title: t('directionsTitle'),
            content: (
                <Stack spacing={0.5}>
                    <Typography variant="body2" color={theme.palette.text.primary}>
                        <MuiLink href={WAZE_DIRETION} target="_blank" underline="hover">
                            {t('waze')}
                        </MuiLink>
                    </Typography>

                </Stack>
            )
        }
    ];

    return (
        <Box sx={{ py: { xs: 4, md: 6 }, px: 2, bgcolor: '#fff', zIndex: 100 }}>
            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    bgcolor: theme.palette.brandTeal.main,
                    borderRadius: 3,
                    px: { xs: 2, md: 6 },
                    py: { xs: 4, md: 6 },
                    width: '100%',
                    margin: { xs: '0 auto', md: '0 auto 0' },
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
                }}
            >
                {items.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                borderRadius: 3,
                                height: '100%',
                                transition: 'all 0.3s',
                                backgroundColor: '#F2F0EF',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: `0 6px 24px ${theme.palette.brandOlive}`
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 48,
                                    height: 48,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.brandTeal?.main,
                                    color: '#fff',
                                    mb: 2
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography variant="h6" fontWeight="bold" mb={1} color={theme.palette.brandTeal.main}>
                                {item.title}
                            </Typography>
                            <Box>
                                {item.content}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
