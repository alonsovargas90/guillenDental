'use client'

import { Fab, Tooltip } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useTheme } from '@mui/material/styles'

export default function WhatsappButton() {
    const theme = useTheme()
    const whatsappLink = 'https://wa.me/50687170841?text=Hola%20estoy%20interesado%20en%20agendar%20una%20cita%20con%20Guillén%20DentalCare'

    return (
        <Tooltip title="Contáctanos por WhatsApp" placement="left">
            <Fab
                color="success"
                href={whatsappLink}
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