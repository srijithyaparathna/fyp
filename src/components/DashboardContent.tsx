import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import CribIcon from "@mui/icons-material/Crib";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";

//  Import your new component
import IncubatorAllocation from "./IncubatorAllocation";
import DoctorSection from "./DoctorSection";
import NurseSection from "./NurseSection";

const DashboardContent = () => {
  // Example dashboard stats
  const totalIncubators = 10;
  const babiesCount = 7;
  const freeIncubators = totalIncubators - babiesCount;
  const avgTemperature = "36.8 °C";
  const doctorsCount = 4;
  const nursesCount = 6;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Dashboard Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3}>
        {/* Incubators */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <CribIcon fontSize="large" color="primary" />
              <Typography variant="h6">Incubators</Typography>
              <Typography variant="h4">{totalIncubators}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Babies */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <ChildCareIcon fontSize="large" color="secondary" />
              <Typography variant="h6">Babies</Typography>
              <Typography variant="h4">{babiesCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Free Incubators */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <CribIcon fontSize="large" sx={{ color: "green" }} />
              <Typography variant="h6">Free Incubators</Typography>
              <Typography variant="h4">{freeIncubators}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Temperature */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <ThermostatIcon fontSize="large" color="error" />
              <Typography variant="h6">Room Temperature</Typography>
              <Typography variant="h4">{avgTemperature}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Doctors */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <LocalHospitalIcon fontSize="large" sx={{ color: "blue" }} />
              <Typography variant="h6">Doctors</Typography>
              <Typography variant="h4">{doctorsCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Nurses */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <PeopleIcon fontSize="large" sx={{ color: "purple" }} />
              <Typography variant="h6">Nurses</Typography>
              <Typography variant="h4">{nursesCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/*  Incubator Allocations Section */}
      <IncubatorAllocation />
      
      {/* Doctors Section */}
      <DoctorSection />

      {/* Nurses Section */}
      <NurseSection />
    </Box>
  );
};

export default DashboardContent;
