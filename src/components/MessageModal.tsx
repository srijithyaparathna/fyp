import React, { useEffect, useState } from 'react'

import {Box, Typography, Modal, List, ListItem, ListItemText, IconButton} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
// Define the structure Type of message object
interface Message{
  id:number; 
  sender: string;
  content: string;
  time:string;
}


// Define props for the MessageModel component
interface Props{
  open: boolean;
  onClose: () => void;
}

const MessageModal: React.FC<Props> = ({ open, onClose }) =>  {

// Local state to store messages
const [messages,setMessages] = useState<Message[]>([
// Default Placeholder messages shown before fetching real ones
{id:1,sender:"Sahan",content:"hey how are you", time: "1 min ago"},
 { id: 2, sender: "Prasadi", content: "Meeting at 3 PM", time: "7 min ago" },
    { id: 3, sender: "Vimansa", content: "Project deadline extended", time: "15 min ago" },
]);


// useEffect runs when the modal is opened
useEffect (()=>{
  const fetchMessages = async () =>{
    try {
        // Get user ID form local storage
        const userId = localStorage.getItem("id");
        if(!userId)  return; // stop if the no user id,,,,,,,,,,,,,,,,

        // Make API call to fetch message for the user
        const res = await fetch('https://example.com/api/messages/${userId}');
        if(!res.ok) throw new Error("Failed to fetch messages")


        // parse the JSON response into Message[] type
        const data: Message[] = await res.json();

        //update state with fetched messages
        setMessages(data);




    }
    catch(err){
      console.error(err); 
    }
  };

if(open) fetchMessages();
  
},[open]);











  return (
    //  Meterial-UI Modal component
       <Modal open={open} onClose={onClose}>
      {/* Modal content container */}
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
         {/* Close Button at Top-Left */}
   
        {/* Modal title */}
        <Typography variant="h6" gutterBottom>
          Messagesvdf
        </Typography>

       {/* Close "X" button in top-right inside the modal */}
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
        {/* List of messages */}
        <List>
          {messages.map((m) => (
            <ListItem key={m.id}>
              {/* Primary text: sender + message, Secondary text: time */}
              <ListItemText
                primary={`${m.sender}: ${m.content}`}
                secondary={m.time}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default MessageModal