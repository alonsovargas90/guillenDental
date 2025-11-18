'use client';

import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  IconButton,
  useTheme,
  Link as MuiLink
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslations } from 'next-intl';
import { CONTACTUS_EMAIL, WHATSUP_NUMBER } from '@/constants/constants';

export default function FAQSection() {
  const t = useTranslations('faq');
  const theme = useTheme();
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (panel: number) => {
    setExpanded((prev) => (prev === panel ? null : panel));
  };

  const faqItems = t.raw('items') as { question: string; answer: string }[];

  return (
    <Box px={2} py={6}>
      <Grid container spacing={6} alignItems="flex-start">
        {/* Left Column */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="overline" color="brandGray.main" gutterBottom>
            {t('sectionLabel')}
          </Typography>

          <Typography variant="h2" color="text.primary" gutterBottom>
            {t('title')}
          </Typography>

          <Typography variant="body1" mb={4} color="text.primary">
            {t('description')}
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: theme.palette.invisalignSkyBlue.main,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <PhoneIcon sx={{ color: theme.palette.text.primary }} />
              </Box>
              <Typography>{WHATSUP_NUMBER}</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: theme.palette.invisalignSkyBlue.main,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <EmailIcon sx={{ color: theme.palette.text.primary }} />
              </Box>
              <MuiLink href={`mailto:${CONTACTUS_EMAIL}`} underline="hover">
                {CONTACTUS_EMAIL}
              </MuiLink>
            </Stack>
          </Stack>
        </Grid>

        {/* Right Column */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={2}>
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => handleChange(index)}
                sx={{
                  borderRadius: 2,
                  boxShadow: 'none',
                  bgcolor: '#fff',
                  border: '1px solid #eee',
                  '&:before': { display: 'none' }
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === index ? (
                      <>
                       <IconButton>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                      </>
                    ) : (
                      <>
                       <IconButton>
                        <ExpandMoreIcon fontSize="small" />
                      </IconButton>
                      </>
                    )
                  }
                  sx={{
                    borderRadius: 2,
                    minHeight: 60,
                    '& .MuiAccordionSummary-content': {
                      marginY: 1
                    }
                  }}
                >
                  <Typography fontWeight={500}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
