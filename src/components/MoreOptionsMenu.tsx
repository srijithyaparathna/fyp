import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MyAccount from '@/components/MyAccount'; // your profile info component

const MoreOptionsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showProfile, setShowProfile] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log("Profile click");
    handleClose();
    setShowProfile(true);
  };

  const handleAcountClick = () => {
    console.log("My account clicked");
    handleClose();
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    handleClose();
    // Optionally clear token
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const handleCloseProfile = () => {
    setShowProfile(false); // ✅ close profile panel
  };

  return (
    <>
      {/* Icon button (3-dot menu) */}
      <IconButton color="inherit" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      {/* MUI Menu */}
      <Menu
        id="more-options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleAcountClick}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      {showProfile && (
        <div
          className="fixed top-14 right-6 w-[350px]  bg-white shadow-2xl rounded-2xl
           border-gray-200  transition-transform duration-300 ease-in-out transform z-50"
        >
          {/* Close button */}
          <button
            onClick={handleCloseProfile}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <MyAccount />
        </div>
      )}

      {showProfile && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={handleCloseProfile}
        ></div>
      )}
    </>
  );
};

export default MoreOptionsMenu;
