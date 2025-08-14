// components/SidebarMenu.tsx
import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SidebarMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Open menu
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu item actions
  const handleDashboardClick = () => {
    console.log("Dashboard clicked");
    handleClose();
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
    handleClose();
  };

  const handleHelpClick = () => {
    console.log("Help clicked");
    handleClose();
  };

  return (
    <>
      {/* Menu (hamburger) icon */}
      <IconButton edge="start" color="inherit" onClick={handleClick}>
        <MenuIcon />
      </IconButton>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem>
        <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
        <MenuItem onClick={handleHelpClick}>Help</MenuItem>
      </Menu>
    </>
  );
};

export default SidebarMenu;
