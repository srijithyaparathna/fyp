import React, { useState } from 'react'
import {IconButton,Menu,MenuItem} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MoreOptionsMenu: React.FC = () => {
    // State to store the HTML element that anchors the menu
    // null means the menu is colsed: and element means the opens anchored to that element
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Boolean to check if the menu is open true or closed false
  const open = Boolean(anchorEl);

// when the iconbutton is clicked store the button element in anchorE1
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event?.currentTarget)
    }

// Close the menu by setting anchorE1 to null 
const handleClose = () => {
    setAnchorEl(null);
}

 // handle for Profile menu
 const handleProfileClick = () => {
    console.log("Profile click");
    handleClose();
 };

 const handleAcountClick = () => {
    console.log("My account clicked");
    handleClose();
 };

const handleLogoutClick = () => {
    console.log('Logout clicked');
    handleClose();
}









  return (
     <>
      {/* Icon button with "more" (three-dot) icon */}
      <IconButton color="inherit" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      {/* MUI Menu Component */}
      <Menu
        id="more-options-menu"
        anchorEl={anchorEl}   // Anchor position for the menu
        open={open}           // Boolean to open/close menu
        onClose={handleClose} // Close menu when clicking outside
        anchorOrigin={{       // Position of the menu relative to the anchor
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{    // Where the menu grows from
          vertical: "top",
          horizontal: "left"
        }}
      >
        {/* Menu Items with click handlers */}
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleAcountClick}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default MoreOptionsMenu