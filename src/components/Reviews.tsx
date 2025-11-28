'use client'

import { useIsDesktop } from '@/hooks/useIsDesktop';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import Slider from 'react-slick'

export default function Reviews() {
    const t = useTranslations('Reviews');
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const reviews = t.raw('list') as {
        quote: string
        name: string
        date: string
        img: string
    }[]
    const theme = useTheme();
    const { isDesktop } = useIsDesktop();

    return (
        <>
            <Stack sx={{
                py: 8,
                flexDirection: isDesktop ? 'row' : 'column',
            }}>
                <Box sx={{
                    position: 'relative',
                    height: { xs: '350px', md: '500px' },
                    width: isDesktop ? '50%' : '100%',
                    flexGrow: 1
                }}>
                    <Image
                        src={`/ReviewMain.jpg`}
                        alt={'Sofi la chef y unuestra dentista Andrea Guillen'}
                        fill
                        className="image"
                        style={{
                            objectFit: 'cover',
                            objectPosition: '0% 35%'
                        }}
                    />
                </Box>
                <Stack sx={{
                    p: 3,
                    width: isDesktop ? '50%' : '100%',
                    justifyContent: 'space-evenly'
                }}>
                    <Stack>
                        <Typography variant='h3' color={theme.palette.brandTeal?.main} textAlign='center'>{t('title')}</Typography>
                        <Typography variant='h6' color='black' textAlign='center' sx={{
                        }}>{t('description')} </Typography>
                        <Stack justifyContent='center' alignItems='center' padding={5}>
                            <Button variant='contained'
                                href='https://www.google.com/search?q=Guilen+dental#lrd=0x8fa0e37c0df905af:0xe5496933b525b029,1,,,,'
                                sx={{
                                    width: '400px'
                                }}
                            >{t('buton')}</Button>
                        </Stack>

                    </Stack>
                    <Slider {...sliderSettings}>
                        {reviews.map((review, index) => (
                            <Box>
                                <Box
                                    key={index}
                                    sx={{
                                        p: 3,
                                        borderRadius: '12px',
                                        backgroundColor: theme.palette.common.white,
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #e0e0e0',
                                        maxWidth: '90%',
                                        mx: 'auto'
                                    }}
                                >
                                    {/* Profile row */}
                                    <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                        <Image
                                            src={review.img}
                                            alt={review.name}
                                            width={48}
                                            height={48}
                                            style={{
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight={600}>
                                                {review.name}
                                            </Typography>
                                            <Box display="flex" mb={1}>
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i} style={{ color: '#f4b400', fontSize: '16px' }}>★</span>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Stack>

                                    {/* Stars row */}


                                    {/* Quote */}
                                    <Typography
                                        variant="body2"
                                        color="text.primary"
                                        fontSize="15px"
                                    >
                                        {review.quote}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Stack>
            </Stack>
        </>
    )
}