'use client'

import { Box, Typography, Link as MuiLink, Paper, Stack, useTheme } from '@mui/material'
import { Email, WhatsApp, Room, Directions } from '@mui/icons-material'
import { useTranslations } from 'next-intl'
import { CONTACTUS_EMAIL, MAPS_DIRECTION, WAZE_DIRETION, WHATSUP_NUMBER, WHATSUP_NUMBER_LINK } from '@/constants/constants';
import { useState } from 'react';

export default function HeroContact() {
    const t = useTranslations('heroContact');
    const theme = useTheme();
    const items = [
        {
            icon: <Email fontSize="large" />,
            title: t('emailTitle'),
            text: CONTACTUS_EMAIL,
            link: `mailto:${CONTACTUS_EMAIL}`,
        },
        {
            icon: <WhatsApp fontSize="large" />,
            title: t('whatsappTitle'),
            text: WHATSUP_NUMBER,
            schedule: t('whatsappSchedule'),
            link: WHATSUP_NUMBER_LINK,
        },
        {
            icon: <Room fontSize="large" />,
            title: t('addressTitle'),
            text: t('addressText'),
            link: 'https://maps.app.goo.gl/MXfk7bc337uJjhjj6',
        },
        {
            icon: <Directions fontSize="large" />,
            title: t('directionsTitle'),
            text: (
                <>
                    <MuiLink href={MAPS_DIRECTION} target="_blank">
                        {t('googleMaps')}
                    </MuiLink>
                    <br />
                    <MuiLink href={WAZE_DIRETION} target="_blank">
                        {t('waze')}
                    </MuiLink>
                </>
            ),
        }
    ]
    const [hoverIndex, setHoverIndex] = useState<number>(-1);

    return (
        <Box sx={{
            py: { xs: 3, md: 6 },
            backgroundColor: '#fff',
            position: 'relative',
            zIndex: 999,
        }}>
            <Stack
                direction={{ md: 'column', lg: 'row' }}
                justifyContent="center"
                alignItems="stretch"
                gap={'20px'}
                sx={{
                    width: '90%',
                    padding: { xs: '20px', md: '40px' },
                    borderRadius: '4px',
                    background: theme.palette.brandTeal.main,
                    margin: { xs: '0px auto 0', md: '-100px auto 0' },
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: 1,
                            display: 'flex',
                            backgroundColor: '#F2F0EF',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease',
                            transform: hoverIndex === index ? 'scale(1.03)' : 'scale(1)',
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                p: { xs: 1, md: 3 },
                                height: '100%',
                                textAlign: 'center',
                                backgroundColor: 'rgba(37,37,37,0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flex: 1,
                            }}
                        >
                            <Box mb={2} color={theme.palette.brandTeal.main}>
                                {item.icon}
                            </Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color={theme.palette.brandTeal.main}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                component="div"
                                color={theme.palette.brandGreen.main}
                                minHeight={{ xs: '50px', md: '72px' }}
                            >
                                {typeof item.text === 'string' ? (
                                    <MuiLink href={item.link} target="_blank" underline="hover" color="inherit">
                                        <Typography>{item.text}</Typography>
                                    </MuiLink>
                                ) : (
                                    item.text
                                )}
                                <Typography
                                    sx={{
                                        margin: '0 auto',
                                        maxWidth: '60%',
                                    }}
                                >
                                    {item.schedule ? item.schedule : null}
                                </Typography>
                            </Typography>
                        </Paper>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}