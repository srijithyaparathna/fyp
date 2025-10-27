import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import CribIcon from "@mui/icons-material/Crib";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import ThermostatIcon from "@mui/icons-material/Thermostat";

type Incubator = {
  id: number;
  baby?: string;
  doctor?: string;
  nurse?: string;
  temperature?: string;
  status?: "Stable" | "Critical" | "Observation";
};

const incubators: Incubator[] = [
  { id: 1, baby: "Baby A", doctor: "Dr. Smith", nurse: " Lily", temperature: "36.7 °C", status: "Stable" },
  { id: 2, baby: "Baby B", doctor: "Dr. Brown", nurse: " John", temperature: "37.2 °C", status: "Observation" },
  { id: 3, baby: "Baby C", doctor: "Dr. Lee", nurse: " Emma", temperature: "38.1 °C", status: "Critical" },
  { id: 4 },
  { id: 5, baby: "Baby D", doctor: "Dr. White", nurse: " Rose", temperature: "36.5 °C", status: "Stable" },
  { id: 6 },
  { id: 7, baby: "Baby E", doctor: "Dr. Smith", nurse: " Anna", temperature: "37.0 °C", status: "Stable" },
  { id: 8 },
  { id: 9, baby: "Baby F", doctor: "Dr. Brown", nurse: " Tom", temperature: "36.9 °C", status: "Observation" },
  { id: 10 },
];

const IncubatorCard = ({ inc }: { inc: Incubator }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
         height: 230,   // 🔹 fixed box height
        width: 200, // 🔹 keeps consistent width inside Grid
        transition: "0.3s",
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          <CribIcon fontSize="small" sx={{ mr: 1, color: "#1976d2" }} />
          INC 00{inc.id}
        </Typography>
        <Divider sx={{ my: 1 }} />

        {inc.baby ? (
          <Box>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <ChildCareIcon fontSize="small" sx={{ mr: 1, color: "orange" }} />
              Baby: <b style={{ marginLeft: 5 }}>{inc.baby}</b>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <LocalHospitalIcon fontSize="small" sx={{ mr: 1, color: "blue" }} />
              Doctor: {inc.doctor}
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <PeopleIcon fontSize="small" sx={{ mr: 1, color: "purple" }} />
              Nurse: {inc.nurse}
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <ThermostatIcon fontSize="small" sx={{ mr: 1, color: "red" }} />
              Temp: {inc.temperature}
            </Typography>

            {/* Status Badge */}
            <Box mt={1}>
              <Chip
                label={inc.status}
                color={
                  inc.status === "Stable"
                    ? "success"
                    : inc.status === "Critical"
                    ? "error"
                    : "warning"
                }
                variant="outlined"
              />
            </Box>
          </Box>
        ) : (
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Free (No Baby Assigned)
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

const IncubatorAllocation = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Incubator Allocations
      </Typography>
      <Grid container spacing={3}>
        {incubators.map((inc) => (
          <Grid item xs={12} sm={6} md={4} key={inc.id}>
            <IncubatorCard inc={inc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IncubatorAllocation;
