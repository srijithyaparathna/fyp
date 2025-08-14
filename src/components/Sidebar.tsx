import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Menu items with labels and icons
const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Infant", icon: <ChildCareIcon /> },
  { label: "Settings", icon: <SettingsIcon /> }
];

// Sidebar component
export const Sidebar = ({ active = "Dashboard", setActivePage, doctor }) => {
  // Fallback if doctor or avatar is not provided
  const defaultAvatar = "https://randomuser.me/api/portraits/women/44.jpg";
  const doctorName = doctor?.name || "Doctor Name";
  const doctorAvatar = doctor?.avatar || defaultAvatar;

  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "white",
        height: "100vh",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 0,
      }}
    >
      {/* Logo Header */}
      
      <Box
        sx={{
          width: "100%",
          bgcolor: "#6C63FF",
          color: "white",
          textAlign: "center",
          py: 2,
          mb: 3,
          
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          🩺 Medical
        </Typography>
      </Box>

      {/* Doctor Profile */}
      <Avatar
      
        alt={doctorName}
        src={doctorAvatar}
        sx={{ width: 100, height: 100,
          
         }}
      />
      <Typography mt={1} mb={3} fontWeight="bold">
        {doctorName}
      </Typography>

      {/* Sidebar Menu */}
      <List sx={{ width: "100%" }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={item.label === active}
              onClick={() => setActivePage(item.label)} // Change middle content
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#f0f0f0",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
