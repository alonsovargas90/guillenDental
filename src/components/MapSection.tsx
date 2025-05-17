'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Default icon fix for SSR issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

export default function MapSection() {
  const theme = useTheme();

  // Example: Coordinates of San José, Costa Rica (replace with your actual location)
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
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
