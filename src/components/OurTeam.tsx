'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { TeamMember } from '@/types/types';
import { useIsDesktop } from '@/hooks/useIsDesktop';


export default function OurTeam() {
    const t = useTranslations('OurTeam');
    const theme = useTheme();
    const { isDesktop } = useIsDesktop();

    const teamMembers = t.raw('members') as TeamMember[];

    return (
        <Box py={8} px={2} bgcolor="#fff">
            <Typography
                variant="h2"
                textAlign="center"
                fontWeight="bold"
                fontSize={{ xs: '38px', md: '48px' }}
                mb={4}
                color={theme.palette.brandTeal.main}
            >
                {t('title')}
            </Typography>
            <Typography variant="body1" textAlign="center" mb={6}>
                {t('description')}
            </Typography>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
                {teamMembers.map((member) => (
                    <Box
                        key={member.img}
                        sx={{
                            width: { xs: '100%', md: '25%' },
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.4s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                            },
                            '&:hover .image': {
                                filter: 'grayscale(0%) !important',
                            },
                        }}
                    >
                        {/* Image */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '250px', md: '500px' },
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src={`/out-team/${member.img}.jfif`}
                                alt={member.name}
                                fill
                                className="image"
                                style={{
                                    filter: 'grayscale(100%)',
                                    objectFit: isDesktop ? 'cover' : 'cover',
                                    objectPosition: isDesktop ? 'center' : 'center 30%',
                                    transition: 'filter 0.6s ease-in-out',
                                }}
                            />
                        </Box>

                        {/* Text */}
                        <Box mt={2} px={2}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                                color={theme.palette.brandOlive.main}
                                gutterBottom
                            >
                                {member.name}
                            </Typography>
                            <Typography
                                variant="h5"
                                fontWeight={500}
                                fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                                color={theme.palette.brandTeal.main}
                                gutterBottom
                            >
                                {member.specialty}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.brandGray.main} gutterBottom minHeight={'50px'}>
                                {member.description}
                            </Typography>
                            {/* <Stack direction="row" spacing={1} mt={2}>
                                {member.facebook && (
                                    <IconButton component="a" href={member.facebook} target="_blank">
                                        <Facebook sx={{ color: theme.palette.brandTeal.main }} />
                                    </IconButton>
                                )}
                                {member.instagram && (
                                    <IconButton component="a" href={member.instagram} target="_blank">
                                        <Instagram sx={{ color: theme.palette.brandTeal.main }} />
                                    </IconButton>
                                )}
                                {member.linkedin && (
                                    <IconButton component="a" href={member.linkedin} target="_blank">
                                        <LinkedIn sx={{ color: theme.palette.brandTeal.main }} />
                                    </IconButton>
                                )}
                                {member.tiktok && (
                                    <IconButton component="a" href={member.tiktok} target="_blank">
                                        <LinkedIn sx={{ color: theme.palette.brandTeal.main }} />
                                    </IconButton>
                                )}
                            </Stack> */}

                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}