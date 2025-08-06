import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import type { Infant } from './InfantDetailCard';

type Props = {
  infant: Infant;
  onBackToProfile: () => void;
};

const HistoryCard = ({ infant, onBackToProfile }: Props) => {
  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 4, boxShadow: 2 }}>
      <Button variant="outlined" onClick={onBackToProfile} sx={{ mb: 2 }}>
        ← Back to Profile
      </Button>

      <Typography variant="h6">History for {infant.id}</Typography>
      <Typography>Previous visits, medications, and diagnosis will appear here.</Typography>
    </Box>
  );
};

export default HistoryCard;
