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
        return <DashboardContent />
      case 'Infant':
        return <InfantDetailsContent />
      case 'Settings':
        return <SettingsPageContent />
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', margin: 0, padding: 0 }}>
      {/* Fixed Sidebar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 300,
          height: '100vh',
          zIndex: 1100,
          bgcolor: 'background.paper', // optional background
        }}
      >
        <Sidebar active={activePage} setActivePage={setActivePage} />
      </Box>

      <Box
        sx={{
          marginLeft: '300px',    // offset to right of sidebar
          marginTop: '64px',      // offset below navbar
          height: 'calc(100vh - 64px)', // full viewport height minus navbar height
          overflowY: 'auto',
          backgroundColor: '#e8eef1',
          flexGrow: 1,
          padding: 3,
        }}
      >
        {/* Fixed Navbar */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 300,
            right: 0,
            height: 64,
            zIndex: 1200,
          }}
        >
          <Navbar />
        </Box>

        {renderContent()}
      </Box>
    </Box>
  );
};

export default InfantDetails;
