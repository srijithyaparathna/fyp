import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import type { Infant } from './InfantDetailCard';

type Props = {
  infant: Infant;
  onBackToProfile: () => void;
};

const VitalsCard = ({ infant, onBackToProfile }: Props) => {
  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 4, boxShadow: 2 }}>
      <Button variant="outlined" onClick={onBackToProfile} sx={{ mb: 2 }}>
        ← Back to Profile
      </Button>

      <Typography variant="h6">Vitals for {infant.id}</Typography>
      <Typography>Heart rate: 120 bpm</Typography>
      <Typography>Temperature: 37.2°C</Typography>
      <Typography>Oxygen Level: 98%</Typography>
    </Box>
  );
};

export default VitalsCard;
