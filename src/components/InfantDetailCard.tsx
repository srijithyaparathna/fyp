import React from 'react';
import { Box, Typography, Avatar, Button, Tabs, Tab } from '@mui/material';
import VitalsCard from './VitalsCard';
import HistoryCard from './HistoryCard';
import LiveFeedCard from './LiveFeedCard';

export type Infant = {
  id: string;
  image: string;
  incubator: string;
  jaundiceStatus: string;
  cryingStatus: string;
  video: string;
  doctor: string;
  lastUpdate: string;
};

type Props = {
  infant: Infant;
  onBack: () => void;
  subView: 'Profile' | 'Vitals' | 'History' | 'LiveFeed';
  setSubView: (view: 'Profile' | 'Vitals' | 'History' | 'LiveFeed') => void;
};

const InfantDetailCard = ({ infant, onBack, subView, setSubView }: Props) => {
  // If subview is not 'Profile', render only the selected subview component
  if (subView === 'Vitals') {
    return <VitalsCard infant={infant} onBackToProfile={() => setSubView('Profile')} />;
  }

  if (subView === 'History') {
    return <HistoryCard infant={infant} onBackToProfile={() => setSubView('Profile')} />;
  }

  if (subView === 'LiveFeed') {
    return <LiveFeedCard infant={infant} onBackToProfile={() => setSubView('Profile')} />;
  }

  // Default Profile view
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: 2,
      }}
    >
      <Button variant="outlined" onClick={onBack} sx={{ mb: 2 }}>
        ← Back to List
      </Button>

      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Avatar src={infant.image} sx={{ width: 60, height: 60 }} />
        <Typography variant="h5">{infant.id}</Typography>
      </Box>

      <Typography>Incubator: {infant.incubator}</Typography>
      <Typography>Jaundice Status: {infant.jaundiceStatus}</Typography>
      <Typography>Crying Status: {infant.cryingStatus}</Typography>
      <Typography>Video: {infant.video}</Typography>
      <Typography>Doctor: {infant.doctor}</Typography>
      <Typography>Last Update: {infant.lastUpdate}</Typography>

      {/* Tabs */}
      <Box mt={4}>
        <Tabs
          value={subView}
          onChange={(_, newValue) => setSubView(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Vitals" value="Vitals" />
          <Tab label="History" value="History" />
          <Tab label="Live Feed" value="LiveFeed" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default InfantDetailCard;
