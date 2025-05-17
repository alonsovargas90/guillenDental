'use client';

import { useMessages } from 'next-intl';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Hero from '@/components/hero';
import ProfessionalInCharge from '@/components/ProfessionalInCharge';
import InvisalignBanner from '@/components/InvisalignBanner';
import { OurTeamContent } from '@/types/types';

const OurTeamPage = () => {
  const messages = useMessages();
  const theme = useTheme();

  const content = messages.OurTeam as OurTeamContent;

  if (!content || !Array.isArray(content.members)) {
    return (
      <Box py={4} bgcolor={theme.palette.brandGray.light}>
        <Container maxWidth="md">
          <Typography variant="h4" color="error">
            Team content not found.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Hero
        greenTitle={content.title}
        blackTitle={content.description}
        image="/images/our-team-banner.jpeg"
        backgroundPosition="50% 30%"
      />

      <Container maxWidth="md">
        {content.members.map((member, i) => (
          <ProfessionalInCharge
            key={member.name}
            image={`/out-team/${member.img}.jfif`}
            name={member.name}
            title={member.specialty}
            description={member.description}
            longDescription={member.longDescription}
            invert={i % 2 !== 0}
            socialLinks={{
              instagram: member.instagram,
              linkedin: member.linkedin,
              tiktok: member.tiktok
            }}
          />
        ))}
      </Container>

      <InvisalignBanner />
    </Box>
  );
};

export default OurTeamPage;