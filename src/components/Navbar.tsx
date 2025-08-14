import React, { useEffect, useState } from 'react'
import { AppBar,Toolbar,IconButton,Typography,InputBase,Badge,Avatar,Box} from '@mui/material'
import {styled,alpha} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MessageModal from './MessageModal';
import NotificationModal from './NotificationModal';
import MoreOptionsMenu from "./MoreOptionsMenu"; 
import SidebarMenu from './SidebarMenu';
const Search = styled('div')(({theme})=>({
  position:'relative',
  borderRadius:theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black,0.05),
  marginLeft:16,
  width:'300px',
  [theme.breakpoints.down('sm')]:{
    width:'200px'
  },


}));


const SearchInput = styled(InputBase)(({theme})=>({
  padding:theme.spacing(1),
  width:'100%'
}))








export const Navbar = () => {


  // State Management 
  const [notifications,setNotifications] = useState(0);
  const [messages,setMessages] = useState(0);
  const [searchQuery,setSearchQuery] = useState(0);
  const [openNotifications,setOpenNotifications]= useState(false);
  const [openMessages, setOpenMessages]=useState(false);

 // API call 
 useEffect(() => {
fetchNotification();

 },[]);


  const fetchNotification = async() => {
    const count = await Promise.resolve(6);
    setNotificationns(count);
  }


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSearchSubmit = (e) => {
    // Toggle slidebar or open drawer
    console.log("Menu clicked (toggle sidebar)");
  };

  const handleNotificationsClick = () => {
    setOpenNotifications(true);

  };

  const handelMessagesClick = ()=>{
    setOpenMessages(true); 
  }

  const handleMoreOptionClick = () => {
    console.log('More option')
  }



  return (
    
<>
<AppBar 
  position="static"
  elevation={1} 
  sx={{ py: 0, }}
  color='inherit'
  
>
  <Toolbar sx={{justifyContent:'space-between'}} >
    <Box sx={{display:'flex',alignContent:'center'}} >
<SidebarMenu />

     <Search>
      
      <SearchInput placeholder='Search...' />
     </Search>
    </Box>



    {/* Right: Icons + Profile */}
    <Box sx={{display:'flex',alignItems:'center',gap:2,ml:'auto' }} >

    <IconButton color='inherit' onClick={handleNotificationsClick} >
      <Badge badgeContent={6} color='error' > 
        <NotificationsIcon/>
      </Badge>
    </IconButton>

    <IconButton color='inherit' >
      <Badge badgeContent={2} color='primary' onClick={handelMessagesClick} >
        <MailIcon/>
      </Badge>
    </IconButton>

    <Box sx={{display:'flex',alignItems:'center',gap:1}} >
    <Avatar
      alt='User'
      src="https://i.pravatar.cc/150?img=32"
      sx={{width:32,height:32}}
    />
   <Typography variant="body1">User</Typography>
    </Box>


    </Box>

        {/* More Options Menu */}
            <MoreOptionsMenu        
            />

    </Toolbar>



    </AppBar>

    {/* Modals */}
      <NotificationModal open={openNotifications} onClose={() => setOpenNotifications(false)} />
      <MessageModal open={openMessages} onClose={() => setOpenMessages(false)} />
</>
  );
};
