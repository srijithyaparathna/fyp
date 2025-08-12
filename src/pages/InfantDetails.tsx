// pages/InfantDetails.jsx (your override)
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Box } from '@mui/material';

import DashboardContent from '@/components/DashboardContent';
import InfantDetailsContent from '@/components/InfantDetailsContent';
import SettingsPageContent from '@/components/SettingsPageContent';

const InfantDetails = () => {
  const [activePage, setActivePage] = useState('Infant'); // Default page

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardContent/>
      case 'Infant':
        return <InfantDetailsContent/>
      case 'Settings':
        return < SettingsPageContent/>
      default: 
        return 
    }
  };

  return (
    <Box sx={{ display: 'flex', margin: 0, padding: 0  }}>
      <Sidebar active={activePage} setActivePage={setActivePage} />
      <Box sx={{ flexGrow: 1, margin: 0, padding: 0 ,  backgroundColor: "#e8eef1" }}>
        <Navbar />
        <Box sx={{ p: 3  }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default InfantDetails;
