'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import {
  AppBar, Toolbar, Box, Button, Menu, MenuItem, Fade,
  IconButton, Drawer, List, ListItemText, Divider,
  ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useIsDesktop } from '@/hooks/useIsDesktop' // adjust path as needed

interface NavbarProps {
  locale: string
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations();
  const theme = useTheme();
  const { isDesktop } = useIsDesktop();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleMouseLeave = () => setAnchorEl(null)
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open)

  const services = t.raw('OurServices.list') as {
    service: string
    link: string
  }[]

  const menuItems = [
    { label: t('nav.about'), href: `/${locale}/contact` },
    { label: t('nav.team'), href: `/${locale}/team` },
    { label: t('nav.beforeAfter'), href: `/${locale}/before-after` },
     { label: t('nav.medicalTourism'), href: `/${locale}/medical-tourisim` }
  ];
  const languageSwitcher = (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Link href={`/${locale && locale === 'en' ? 'es' : 'en'}`}>
        <Image
          src={locale === 'en' ? '/flags/es.png' : '/flags/en.png'}
          alt={locale === 'en' ? 'Switch to Spanish' : 'Switch to English'}
          width={24}
          height={24}
          style={{
            border: '1px solid',
            borderColor: theme.palette.divider,
            borderRadius: 4,
            cursor: 'pointer'
          }}
        />
      </Link>
    </Box>
  )

  return (
    <AppBar
      position={drawerOpen ? 'fixed' : 'sticky'}
      sx={{
        padding: '15px 20px',
        zIndex: (theme) => (drawerOpen ? theme.zIndex.drawer - 1 : 1999),
        backgroundColor: theme.palette.background.default,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems:'center' }}>
        {/* Logo */}
        <Link href={`/${locale}`} style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logos/logo_nuevo.jpeg"
            alt="Logo Guillén Dental Care"
            width={isDesktop ? 90 : 60}
            height={isDesktop ? 90 : 70}
            priority
          />
        </Link>

        {isDesktop ? (
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
              {/* Dropdown de servicios */}
            <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Button
                onClick={handleClick}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    backgroundColor: theme.palette.brandTeal?.main,
                    color: theme.palette.common.white
                  }
                }}
              >
                {t('nav.services')}
              </Button>
              <Menu
                disablePortal
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                elevation={4}
                slotProps={{
                  paper: {
                    sx: {
                      zIndex: 2100,
                      borderRadius: 2,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      minWidth: 220,
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                    }
                  },
                  list: {
                    sx: { padding: 0, zIndex: 2100 }
                  }
                }}
              >
                {services.map((service, index) => (
                  <MenuItem
                    key={index}
                    component={Link}
                    href={service.link}
                    onClick={handleClose}
                    sx={{
                      textAlign: 'center',
                      paddingY: 2.5,
                      paddingX: 2.5,
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: theme.palette.brandTeal?.main,
                        color: theme.palette.common.white
                      },
                      zIndex: 2100,
                    }}
                  >
                    {service.service}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {menuItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                variant="text"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  letterSpacing: { xs: '0.02857em', md: '0.02857em' },
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    backgroundColor: theme.palette.brandTeal?.main,
                    color: theme.palette.common.white
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            {languageSwitcher}
          </Box>
        ) : (
          <>
            <IconButton onClick={toggleDrawer(true)} edge="end">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { width: 260 } }}
            >
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider />
              <List>
                {menuItems.map((item) => (
                  <ListItemButton key={item.href} component={Link} href={item.href}>
                    <ListItemText primary={item.label} />
                  </ListItemButton >
                ))}
                <Divider sx={{ my: 1 }} />
                {services.map((service, index) => (
                  <ListItemButton key={index} component={Link} href={service.link}>
                    <ListItemText primary={service.service} />
                  </ListItemButton >
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}