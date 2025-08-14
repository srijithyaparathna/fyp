import React from 'react';
import { Box, Typography, Avatar, Button, Tabs, Tab } from '@mui/material';
import VitalsCard from './VitalsCard';
import HistoryCard from './HistoryCard';
import LiveFeedCard from './LiveFeedCard';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import StatusIndicator from './StatusIndicator';
import ChartCard from './ChartCard';

export type Infant = {
  id: string;
  image: string;
  incubator: string;
  jaundiceStatus: string;
  cryingStatus: string;
  video: string;
  doctor: string;
  lastUpdate: string;
};

type Props = {
  infant: Infant;
  onBack: () => void;
  subView: 'Profile' | 'Vitals' | 'History' | 'LiveFeed';
  setSubView: (view: 'Profile' | 'Vitals' | 'History' | 'LiveFeed') => void;
};

const InfantDetailCard = ({ infant, onBack, subView, setSubView }: Props) => {
  // If subview is not 'Profile', render only the selected subview component
  if (subView === 'Vitals') {
    return <VitalsCard infant={infant} onBackToProfile={() => setSubView('Profile')} />;
  }

  if (subView === 'History') {
    return <HistoryCard infant={infant} onBackToProfile={() => setSubView('Profile')} />;
  }

  if (subView === 'LiveFeed') {
    return <LiveFeedCard infant={infant} onBackToProfile={() => setSubView('Profile')} />;
  }

  // Default Profile view
  return (
    <Box>
    <Box
     p={4} bgcolor="white" borderRadius={15} boxShadow={2} width={1500} 
    >
      <Button variant="outlined" onClick={onBack} sx={{ mb: 3 }}>
        ← Back to List
      </Button>

      {/* Top profile section  */}
      <Grid container spacing={3} alignItems='center' columnSpacing={4} >
   <Grid item xs={12} md={3} sx={{ml:10}}  >
  <Box display="flex" alignItems="center" flexDirection="column">
    <Avatar src={infant.image} sx={{ width: 100, height: 100, mb: 4 }} />
    <Typography variant="h6">{infant.id}</Typography>
    <Button
  variant="outlined"
  size="small"
  sx={{
    mt: 4,
    borderRadius: '15px', // You can adjust the px value
    borderColor: 'black',
    color: 'black',
    '&:hover': {
      borderColor: 'black', // Keeps it black on hover
      backgroundColor: '#f0f0f0', // Optional hover background
    },
  }}
>
  🎥 Video Call
</Button>

  </Box>
  </Grid>


  {/* Vertical Divider */}
  <Divider orientation="vertical" flexItem  sx={{ml:5}} />




      <Grid item xs={12} md={9} >

      <Grid sx={{ml:10}} >

        <Grid container spacing={10} >
          <Grid item xs={6} >
            <Box display="flex" flexDirection="column">
              <Typography>Sex:</Typography>
              <br></br>
              <Typography><b>Male</b></Typography>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Box display="flex" flexDirection="column">
              <Typography>Date of Birth:</Typography>
              <br></br>
              <Typography><b>05/04/2025</b></Typography>
            </Box>

          </Grid>
          <Grid item xs={6} >
            <Box display="flex" flexDirection="column">
              <Typography>Age:</Typography>
              <br></br>
              <Typography><b>10 Days</b></Typography>
            </Box>

          </Grid>
          <Grid item xs={6} >
            <Box display="flex" flexDirection="column">
              <Typography>Birth Weigh:</Typography>
              <br></br>
              <Typography><b>700g</b></Typography>
            </Box>

          </Grid>
          <Grid item xs={6} >
            <Box display="flex" flexDirection="column">
              <Typography>Blood:</Typography>
              <br></br>
              <Typography><b>A+</b></Typography>
            </Box>

          </Grid>
          <Grid item xs={6} >
            <Box display="flex" flexDirection="column">
              <Typography>Incubator</Typography>
              <br></br>
              <Typography><b>Male</b></Typography>
            </Box>

          </Grid>

        </Grid>
      </Grid>

  {/* Parent/Guardian details */}

     <Box mt={2} sx={{mt:10,ml:10}} >
            <Typography variant="body2" fontWeight="bold">
              Parent / Guardian Details
            </Typography>
            <br></br>
            <Grid >
              <Grid display={'flex'} gap={8} >
                      <Typography variant="body2">
              Mother's Name: Ms. Amali G.S

            </Typography>
            |
            <Typography variant='body2' >
              Contact Number : 0714356782
            </Typography>
              </Grid>

<br></br>
                        <Grid display={'flex'} gap={8} >
                      <Typography variant="body2">
              Mother's Name: Ms. Amali G.S

            </Typography>
            |
            <Typography variant='body2' >
              Contact Number : 0714356782
            </Typography>
              </Grid>


         
            </Grid>
           
          
          </Box>




</Grid>
</Grid>

     {/* <Typography>Incubator: {infant.incubator}</Typography>
      <Typography>Jaundice Status: {infant.jaundiceStatus}</Typography>
      <Typography>Crying Status: {infant.cryingStatus}</Typography>
      <Typography>Video: {infant.video}</Typography>
      <Typography>Doctor: {infant.doctor}</Typography>
      <Typography>Last Update: {infant.lastUpdate}</Typography> */}
      {/* Tabs */}
      <Box mt={4}>
        <Tabs
          value={subView}
          onChange={(_, newValue) => setSubView(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Vitals" value="Vitals" />
          <Tab label="History" value="History" />
          <Tab label="Live Feed" value="LiveFeed" />
        </Tabs>
      </Box>
    </Box>

 {/* Charts + Status Section */}
<Box mt={4}>
  <Grid container spacing={3}>
    {/* Chart 1 */}
    <Grid item xs={12} md={6}>
      <ChartCard title="Temperature Chart">
        {/* chart content goes here */}
      </ChartCard>
    </Grid>

    {/* Chart 2 */}
    <Grid item xs={12} md={6}>
      <ChartCard title="Humidity Chart"
      title = "Humidity Chart"
      type = "humidity"
        apiUrl="https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&hourly=relativehumidity_2m"
      >
        {/* chart content goes here */}
      </ChartCard>
    </Grid>

  </Grid>
</Box>

<Box mt={4} >
  <Grid container spacing={3} >
    {/* Chart 3 */}
    <Grid item xs={12} md={6}>
      <ChartCard title="ΔT Measurement">
        {/* chart content goes here */}
      </ChartCard>
    </Grid>

 <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
      <StatusIndicator
        label1="Crying Status"
        status1={infant.cryingStatus}
        label2="Jaundice Status"
        status2={infant.jaundiceStatus}
      />
    </Grid>

   </Grid>
</Box>

    </Box> 
  );
};

export default InfantDetailCard;
