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
  description: string;
  invert?: boolean;
  longDescription: string[];
  socialLinks?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    tiktok?: string
  }
}

export  type SingleServiceContent = {
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