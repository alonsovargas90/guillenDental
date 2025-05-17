'use client';

import { Box, Container, Grid, Stack, Typography, IconButton, Link as MuiLink, useTheme } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TiktokLogo } from 'phosphor-react';
import { useTranslations } from 'next-intl';
import {
    CONTACTUS_EMAIL,
    FACEBOOK_LINK,
    INSTAGRAM_LINK,
    TIKTOK_LINK,
    WHATSUP_NUMBER,
    FIXED_NUMBER,
} from '@/constants/constants';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export default function Footer() {
    const t = useTranslations('footer');
    const theme = useTheme();
    const { isDesktop, isMobile } = useIsDesktop();

    return (
        <Box sx={{ backgroundColor: theme.palette.brandTeal.main, py: 10 }}>
            <Container maxWidth="lg">
                <Stack spacing={4} flexDirection={isDesktop ? 'row' : 'column'} justifyContent='space-between'>
                    {/* Column 1: Logo + Description */}
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2} justifyContent='center' alignItems='center'>
                            <Typography variant="h6" fontWeight="bold" color={theme.palette.brandTeal.contrastText}>
                                Guillen Dental
                            </Typography>
                            <Image src="/logo_gray.png" alt="Guillén Dental Care" width={140} height={140} />
                            <Typography variant="body2" color="white" sx={{ maxWidth: isDesktop ? '250px' : '100%', textAlign: 'center' }} >
                                {t('description')}
                            </Typography>
                            <MuiLink href={`mailto:${CONTACTUS_EMAIL}`} color="white" underline="hover">
                                {CONTACTUS_EMAIL}
                            </MuiLink>
                        </Stack>
                    </Grid>

                    {/* Column 2: Location */}
                    <Grid item xs={12} md={4}>
                        <Stack spacing={1} justifyContent='center' alignItems='center'>
                            <Typography variant="h6" fontWeight="bold" color={theme.palette.brandTeal.contrastText}>
                                {t('locationTitle')}
                            </Typography>
                            <Typography variant="body2" color="white">{t('address')}</Typography>
                            <Typography variant="body2" color="white">{FIXED_NUMBER} CRC</Typography>
                            <Typography variant="body2" color="white">{WHATSUP_NUMBER} WhatsApp</Typography>
                            <Typography variant="caption" color="white" mt={2}>
                                © 2025 Guillén-Dental Care. {t('rights')}
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Column 3: Social + Logos */}
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2} justifyContent='center' alignItems='center'>
                            <Typography variant="h6" fontWeight="bold" color={theme.palette.brandTeal.contrastText}>
                                {t('socialTitle')}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <IconButton href={FACEBOOK_LINK} target="https://www.facebook.com/guillen.dental.care/" sx={{ backgroundColor: theme.palette.brandTeal.contrastText }}>
                                    <FacebookIcon sx={{ color: theme.palette.brandGreen.main }} />
                                </IconButton>
                                <IconButton href={INSTAGRAM_LINK} target="https://www.instagram.com/guillen.dental.care?igsh=MTV0dmsydmpuanBsag==" sx={{ backgroundColor: theme.palette.brandTeal.contrastText }}>
                                    <InstagramIcon sx={{ color: theme.palette.brandGreen.main }} />
                                </IconButton>
                                <IconButton href={TIKTOK_LINK} target="https://www.tiktok.com/@ortodoncia.guillendental" sx={{ backgroundColor: theme.palette.brandTeal.contrastText }}>
                                    <TiktokLogo size={22} color={theme.palette.brandGreen.main} />
                                </IconButton>
                            </Stack>

                            <Typography variant="h6" fontWeight="bold" color={theme.palette.brandTeal.main} mt={2}>
                                <MuiLink
                                    href="https://www.dentalimplantscr.com/privacy-policy/"
                                    target="_blank"
                                    underline="hover"
                                    color={theme.palette.brandTeal.contrastText}
                                    fontWeight="bold"
                                >
                                    {t('privacy')}
                                </MuiLink>
                            </Typography>

                            <Stack gap='15px' flexDirection={'row'}>
                                <Image
                                    src="/logo-colegio-cirujanos-dentistas-de-costa-rica.png"
                                    alt="Colegio Dentistas"
                                    width={isMobile ? 80 : 100}
                                    height={isMobile ? 80 : 100}
                                    style={{
                                        borderRadius: '100%'
                                    }}
                                />
                                <Image
                                    src="/Logo-Essential-Costa-Rica.png"
                                    alt="Essential Costa Rica"
                                    width={isMobile ? 80 : 100}
                                    height={isMobile ? 80 : 100}
                                    style={{
                                        padding: 5,
                                        background: 'white',
                                        borderRadius: '100%'
                                    }}
                                />
                                 <Image
                                    src="/2025-Invisalign-diamond-logo-213x300.png"
                                    alt="Essential Costa Rica"
                                    width={isMobile ? 80 : 100}
                                    height={isMobile ? 80 : 100}
                                    style={{
                                        padding: 5,
                                        background: 'white',
                                    }}
                                />
                                <Image
                                    src="/ACOP_logo.jpeg"
                                    alt="Essential Costa Rica"
                                    width={isMobile ? 120 : 180}
                                    height={isMobile ? 80 : 100}
                                    style={{
                                        padding: 5,
                                        background: 'white',
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}