export type TeamMember = {
  name: string;
  img: string;
  specialty: string;
  description: string;
  longDescription: string[];
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  tiktok?: string;
};

export interface ProfessionalInChargeProps {
  image: string
  name: string
  title: string
  invert?: boolean;
  longDescription: string[];
  socialLinks?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    tiktok?: string
  }
}

export type SingleServiceContent = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  backgroundPosition: string;
  backgroundSize: string;
  image: string;
  specialist: string;
};

export type OurTeamContent = {
  title: string;
  description: string;
  members: TeamMember[];
};

export interface ServiceCard {
  title: string;
  subtitle: string;
}

export interface ServiceInfo {
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  cards: ServiceCard[];
}

export interface SeoOptions {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  locale?: string;
  keywords?: string[];
  icons?: {
    icon?: Array<{ url: string; type?: string; sizes?: string }>;
    apple?: Array<{ url: string; sizes?: string }>;
  };
}

export interface MetaHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  locale?: string;
}
