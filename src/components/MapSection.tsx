'use client';

import { Box, useTheme } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icon paths in SSR environments
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

export default function MapSection() {
  const theme = useTheme();

  // Coordinates for San José, Costa Rica
  const position: [number, number] = [9.9281, -84.0907];

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 300, md: 500 },
        bgcolor: theme.palette.brandGray.light,
        mt: 4,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Guillén DentalCare<br /> San José, Costa Rica
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
