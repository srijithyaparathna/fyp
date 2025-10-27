import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  phone: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sahan Rashmika",
    specialization: "Neonatologist",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Sahan Rashmika",
    specialization: "Pediatrician",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Sahan Rashmika",
    specialization: "Neonatal Surgeon",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
    {
    id: 4,
    name: "Dr. Sahan Rashmika",
    specialization: "Neonatal Surgeon",
    phone: "077-123-4567",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const DoctorSection: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Doctors
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {doctors.map((doctor) => (
          <Card key={doctor.id} sx={{ width: 250,height: 300, p: 2,borderRadius  : 10 , transition: "0.3s",
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" }, }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar src={doctor.image} alt={doctor.name} sx={{ width: 56, height: 56, mr: 2 }} />
              <Typography variant="subtitle1" fontWeight="bold">
                {doctor.name}
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="body2">Specialization: {doctor.specialization}</Typography>
              <Typography variant="body2">Phone: {doctor.phone}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default DoctorSection;
