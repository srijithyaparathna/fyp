import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

interface Nurse {
  id: number;
  name: string;
  shift: string;
  phone: string;
  image: string;
}

const nurses: Nurse[] = [
  {
    id: 1,
    name: "Nurse Charith Bandara",
    shift: "Night",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    id: 2,
    name: "Nurse Charith Bandara",
    shift: "Day",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    id: 3,
    name: "Nurse Charith Bandara",
    shift: "Evening",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
   {
    id: 4,
    name: "Nurse Charith Bandara",
    shift: "Evening",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
   {
    id: 5,
    name: "Nurse Charith Bandara",
    shift: "Evening",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

const NurseSection: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Nurses
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {nurses.map((nurse) => (
          <Card key={nurse.id} sx={{ width: 250,height: 300,borderRadius:10, p: 2 ,  transition: "0.3s",
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" },}}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar src={nurse.image} alt={nurse.name} sx={{ width: 56, height: 56, mr: 2 }} />
              <Typography variant="subtitle1" fontWeight="bold">
                {nurse.name}
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="body2">Shift: {nurse.shift}</Typography>
              <Typography variant="body2">Phone: {nurse.phone}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default NurseSection;
