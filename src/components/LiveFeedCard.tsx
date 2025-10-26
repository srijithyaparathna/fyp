import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Infant } from './InfantDetailCard';

type Props = {
  infant: Infant;
  onBackToProfile: () => void;
};

const LiveFeedCard = ({ infant, onBackToProfile }: Props) => {
  return (
    <Box>
      <Typography variant="h6">Live Feed for {infant.id}</Typography>

      <Button variant="outlined" onClick={onBackToProfile} sx={{ mb: 2 }}>
        ← Back to Profile
      </Button>

      <Typography>Streaming from incubator {infant.incubator}...</Typography>

      {/* Live feed container */}
      <Box
        mt={2}
        sx={{
          width: '100%',
          height: 600,
          backgroundColor: '#ccc',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',   // vertical center
          justifyContent: 'center', // horizontal center
          overflow: 'hidden',
        }}
      >
        <img
          src="http://192.168.1.127:8080/?action=stream"
          alt="Live Feed"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: 8,
          }}
        />
                {/* <img
          src="http://192.168.1.127:8081/?action=stream"
          alt="Live Feed"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: 8,
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default LiveFeedCard;
