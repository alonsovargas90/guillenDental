'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Hero from '@/components/hero';
import ProfessionalInCharge from '@/components/ProfessionalInCharge';
import InfoSection from '@/components/InfoSection';
import InvisalignBanner from '@/components/InvisalignBanner';
import { ServiceInfo, TeamMember } from '@/types/types';
import ServiceInformation from '@/components/ServiceInformation';

type ServicePageContent = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  backgroundPosition: string;
  backgroundSize: string;
  image: string;
  specialist: string;
};

const ServicePage = () => {
  const { id } = useParams();
  const t = useTranslations('ServicePages');
  const tTeam = useTranslations();
  const theme = useTheme();
  const key = id as string;

  const teams = useMemo(() => tTeam.raw('OurTeam.members') as TeamMember[], [tTeam]);
  const services = useMemo(() => tTeam.raw('ServiceInfo') as Record<string, ServiceInfo>, [tTeam]);
  const content = t.raw(key) as ServicePageContent | undefined;
  const serviceData = services?.[key];
  const specialistData = teams.find(x => x.name === content?.specialist);

  if (!content || !serviceData) {
    return (
      <Box py={8} bgcolor={theme.palette.brandGray.light}>
        <Container maxWidth="md">
          <Typography variant="h4" color="error">
            Service &quot;{id}&quot; not found or data is missing.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Hero
        greenTitle={content.title}
        blackTitle={content.subtitle}
        image={content.heroImage}
        backgroundPosition={content.backgroundPosition}
        backgroundSize={content.backgroundSize}
      />

      <ServiceInformation serviceInfo={serviceData} />
      <InvisalignBanner />

      <Container maxWidth="md">
        {specialistData ? (
          <ProfessionalInCharge
            image={`/out-team/${specialistData.img}.jpg`}
            name={specialistData.name}
            title={specialistData.specialty}
            longDescription={specialistData.longDescription}
            socialLinks={{
              instagram: specialistData.instagram,
              linkedin: specialistData.linkedin,
              facebook: specialistData.facebook,
              tiktok: specialistData.tiktok,
            }}
          />
        ) : (
          <Typography color="error">
            Specialist &quot;{content.specialist}&quot; not found in OurTeam.
          </Typography>
        )}
      </Container>

      <Container maxWidth="md">
        <InfoSection
          image={content.image}
          title="Our Philosophy"
          subtitle="Putting Patients First"
          content={content.description}
          leftToRight={false}
        />
      </Container>
    </Box>
  );
};

export default ServicePage;