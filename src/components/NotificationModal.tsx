import React, { useEffect, useState } from 'react'
import {Box,Typography,Modal,List,ListItem,ListItemText, IconButton} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
interface Notification {
    id:number;
    title:string;
    time:string
}

interface Props {
    open:boolean;
    onClose:()=>void;
}



const NotificationModal:React.FC<Props> = ({open,onClose}) => {

    const [notifications,setNotifications] = useState<Notification[]>([

    { id: 1, title: "System update completed", time: "2 min ago" },
    { id: 2, title: "New user registered", time: "5 min ago" },
    { id: 3, title: "Password changed successfully", time: "10 min ago" },

    ]

    )
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const userId = localStorage.getItem("id");
        if (!userId) return;
        const res = await fetch(`https://example.com/api/notifications/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch notifications");
        const data: Notification[] = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (open) fetchNotifications();
  }, [open]);



  return (
     <Modal open={open} onClose={onClose}>
      <Box 
      
       sx={{
          background: "white",
          padding: 3,
          width: 400,
          margin: "10% auto", // Center vertically & horizontally
          borderRadius: 2,
                position: "relative" // important for positioning the close button inside
        }}
      
      >
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
           <IconButton
      onClick={onClose}
      sx={{
        position: "absolute",
        top: 8,
        right: 8, // top-right corner
        color: "grey.600"
      }}
    >
      <CloseIcon />
    </IconButton>
        <List>
          {notifications.map((n) => (
            <ListItem key={n.id}>
              <ListItemText primary={n.title} secondary={n.time} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default NotificationModal