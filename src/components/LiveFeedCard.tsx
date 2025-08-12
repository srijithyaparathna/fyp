import React from 'react';
import { Box, Typography,Button } from '@mui/material';
import { Infant } from './InfantDetailCard';

type Props = {
  infant: Infant;
  onBackToProfile: () => void;
};

const LiveFeedCard = ({ infant,onBackToProfile }: Props) => {
  return (
    <Box>
      <Typography variant="h6">Live Feed for {infant.id}</Typography>
           <Button variant="outlined" onClick={onBackToProfile} sx={{ mb: 2 }}>
              ← Back to Profile
            </Button>
      <Typography>Streaming from incubator {infant.incubator}...</Typography>
      {/* Replace with actual video or camera stream later */}
      <Box mt={2} sx={{ width: '100%', height: 200, backgroundColor: '#ccc', borderRadius: 2 }}>
        <Typography align="center" pt={8}>[Live Camera Placeholder]</Typography>
      </Box>
    </Box>
  );
};

export default LiveFeedCard;
