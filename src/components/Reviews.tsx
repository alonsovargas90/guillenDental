'use client'

import { useIsDesktop } from '@/hooks/useIsDesktop';
import { Box, Stack, Typography, useTheme } from '@mui/material'
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
        <Stack sx={{
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
                    <Typography variant='h3' color='white' >{t('title')}</Typography>
                    <Typography variant='h5' color='white' sx={{
                        marginBottom: '20px'
                    }}>{t('description')} </Typography>

                </Stack>
                <Slider {...sliderSettings}>
                    {reviews.map((review, index) => (
                        <Box key={index} sx={{
                            p: 4,
                            borderRadius: '12px',
                            color: theme.palette.common.white,
                            background: theme.palette.brandTeal.main,
                        }}>
                            <Typography
                                variant="body1"
                                fontStyle="italic"
                                fontSize={'16px'}
                                mb={2}
                                color={theme.palette.brandGray.dark}
                            >
                                “{review.quote}”
                            </Typography>
                            <Stack direction="row" alignItems="center" spacing={2}>
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
                                    <Typography variant="subtitle1">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="caption">
                                        {review.date}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Slider>
            </Stack>
        </Stack>
    )
}