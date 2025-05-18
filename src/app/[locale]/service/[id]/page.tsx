'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Hero from '@/components/hero';
import ProfessionalInCharge from '@/components/ProfessionalInCharge';
import InfoSection from '@/components/InfoSection';
import InvisalignBanner from '@/components/InvisalignBanner';
import { TeamMember } from '@/types/types';

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
  const tTeam = useTranslations(); // base translations
  const theme = useTheme();
  const key = id as string;

  let content: ServicePageContent;
  let specialistData: TeamMember | undefined;

  try {
    content = t.raw(key) as ServicePageContent;

    const team = tTeam.raw('OurTeam.members') as TeamMember[];
    console.log('team', team);
    console.log('content', content.specialist);
    specialistData = team.find((member) => member.name === content.specialist);
  } catch (err) {
    console.log(err);
    return (
      <Box py={8} bgcolor={theme.palette.brandGray.light}>
        <Container maxWidth="md">
          <Typography variant="h4" color="error">
            Service &quot;{id}&quot; not found or specialist missing.
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
      <Container maxWidth="md">
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend quis libero pellentesque mollis. Pellentesque eu magna vitae lorem vehicula congue at sit amet erat. Donec ut malesuada metus, in hendrerit est. Donec laoreet varius erat, eu dapibus felis aliquam laoreet. Sed vel eleifend orci, non faucibus eros. Duis molestie ante vel massa congue porttitor. Nullam pulvinar orci lobortis, tincidunt nunc vitae, tempus orci. Praesent pulvinar sapien eu interdum facilisis. In luctus molestie sapien eu fermentum. Mauris eleifend tempor scelerisque. Mauris non aliquet ante, at interdum ligula. Curabitur in turpis a arcu tempor tempor non eu neque. Phasellus eu arcu ut felis pulvinar porta sed a lacus. Proin at ante aliquam magna dignissim placerat id vel diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Quisque imperdiet urna et felis pretium consectetur. Aliquam rutrum aliquam varius. Quisque ipsum enim, sagittis non erat eget, pellentesque venenatis lectus. Vestibulum molestie a justo sed porta. Etiam posuere vel metus eu aliquam. Ut lacinia, nisl sit amet venenatis dignissim, diam quam lobortis nulla, et molestie orci nisi nec odio. In vulputate, eros auctor lobortis tristique, quam dui pulvinar eros, ac dapibus nunc nulla et neque. Proin maximus gravida interdum. Nullam dui enim, vulputate sed porttitor at, venenatis nec orci. Curabitur malesuada maximus odio nec sodales. Phasellus quis magna sed lacus rutrum tincidunt ut ut neque. Maecenas elementum elit eget lacus mattis, non vehicula ligula iaculis. Praesent suscipit, augue id faucibus auctor, sapien lorem tincidunt orci, fringilla porta sapien odio non elit. Ut rhoncus mi eget turpis accumsan bibendum. Curabitur urna nisl, viverra nec tempus in, pulvinar ac mi. Proin iaculis magna quis eros placerat tincidunt.

Aliquam luctus, ex aliquet dignissim sagittis, tortor lectus posuere tortor, eget molestie nulla orci a libero. Fusce semper, nulla consectetur rutrum consectetur, neque tellus maximus lacus, in porta velit eros ut erat. Nullam id libero ipsum. Etiam rutrum nisi lobortis nulla tristique, vitae auctor nunc gravida. Pellentesque pulvinar lacus vel sodales ultricies. Nullam sagittis diam ac nisi finibus efficitur. Nulla et facilisis nisl, vel tincidunt diam. Nullam efficitur gravida tincidunt. Sed ut ultricies turpis. Cras congue mauris ac augue aliquet, in finibus diam sollicitudin. Ut varius ligula quis aliquam ullamcorper. Vivamus egestas sollicitudin leo sed tincidunt. Pellentesque eu luctus ligula. Maecenas pretium leo eleifend dolor efficitur sagittis.</Typography>
      
      </Container>
     <InvisalignBanner />
      <Container maxWidth="md">
        {specialistData ? (
          <ProfessionalInCharge
            image={`/out-team/${specialistData.img}.jpg`}
            name={specialistData.name}
            title={specialistData.specialty}
            description={specialistData.description}
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