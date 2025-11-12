'use client'
import Hero from '@/components/hero'
import HeroContact from '@/components/HeroContact'
import InvisalignBanner from '@/components/InvisalignBanner'
import OurTeam from '@/components/OurTeam'
import PaymentFacilitiesBanner from '@/components/PaymentFacilities'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import TopPriority from '@/components/TopPriority'
import UserCase from '@/components/UserCase'
import Stack from '@mui/material/Stack'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('hero');
  return <Stack>
    <Hero greenTitle={t('greenTitle')} blackTitle={t('blackTitle')} image={'/hero.png'} flipImage backgroundPosition={"0% 20%"} xl />
    <Services />
    <TopPriority />
    <HeroContact />
    <OurTeam />
    <InvisalignBanner />
    <UserCase />
    <PaymentFacilitiesBanner />
    <Reviews />
  </Stack>
}