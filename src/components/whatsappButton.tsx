'use client'

import { Fab, Tooltip } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useTheme } from '@mui/material/styles'
import { WHATSUP_NUMBER_LINK } from '@/constants/constants'

export default function WhatsappButton() {
    const theme = useTheme()
    return (
        <Tooltip title="Contáctanos por WhatsApp" placement="left">
            <Fab
                color="success"
                href={WHATSUP_NUMBER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: 'fixed',
                    bottom: theme.spacing(4),
                    right: theme.spacing(4),
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#1EBE5D'
                    },
                    zIndex: 1500
                }}
                aria-label="WhatsApp"
            >
                <WhatsAppIcon fontSize="large" />
            </Fab>
        </Tooltip>
    )
}