import React from 'react'
import {Box,Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Avatar,Chip,Button,CircularProgress, colors, ListItemButton
} from '@mui/material'
import InfantDetailCard from './InfantDetailCard'
import axios from 'axios';
import { useEffect, useState } from 'react';


// Helper
const StatusDot = ({ color }: { color: string }) => (
  <Box sx={{
    width: 10, height: 10, borderRadius: '50%',
    backgroundColor: color, display: 'inline-block', mr: 1,
  }} />
);
const defaultInfants = [
  {
    id: 'Baby 01',
    image: 'https://via.placeholder.com/40',
    incubator: 'INC-001',
    jaundiceStatus: 'Normal',
    cryingStatus: 'Normal',
    video: 'ON',
    doctor: 'Dr. Jagath Y.S',
    lastUpdate: '2025-08-06 08:45 AM',
  },
  {
    id: 'Baby 02',
    image: 'https://via.placeholder.com/40',
    incubator: 'INC-002',
    jaundiceStatus: 'Abnormal',
    cryingStatus: 'Normal',
    video: 'ON',
    doctor: 'Dr. Jagath Y.S',
    lastUpdate: '2025-08-06 08:50 AM',
  },
  {
    id: 'Baby 03',
    image: 'https://via.placeholder.com/40',
    incubator: 'INC-003',
    jaundiceStatus: 'Normal',
    cryingStatus: 'Normal',
    video: 'OFF',
    doctor: 'Dr. Jagath Y.S',
    lastUpdate: '2025-08-06 09:00 AM',
  },
  {
    id: 'Baby 04',
    image: 'https://via.placeholder.com/40',
    incubator: 'INC-004',
    jaundiceStatus: 'Abnormal',
    cryingStatus: 'Normal',
    video: 'ON',
    doctor: 'Dr. Jagath Y.S',
    lastUpdate: '2025-08-06 09:10 AM',
  },
];


const InfantDetailsContent = () => {

type Infant = {
  id: string;
  image: string;
  incubator: string;
  jaundiceStatus: string;
  cryingStatus: string;
  video: string;
  doctor: string;
  lastUpdate: string;
};

const [infants, setInfants] = useState<Infant[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInfantId, setSelectedInfantId] = useState<string | null>(null);
const [selectedInfantDetails, setSelectedInfantDetails] = useState<Infant | null>(null);
const [subView, setSubView] = useState<'Profile' | 'Vitals' | 'History' | 'LiveFeed'>('Profile');
  const [detailLoading, setDetailLoading] = useState(false);

useEffect(()=>{
  axios.get("/api/infants")
    .then(res=>{
      if(Array.isArray(res.data)){
        setInfants(res.data.length>0 ? res.data :defaultInfants)
      }
      else{
        console.warn('API did not return an array. Using default data');
        setInfants(defaultInfants);
      }
    })
    .catch(err => {
      console.error("Faild to fetch infants. Using default data",err)
      setInfants(defaultInfants);
    })
    .finally(()=> setLoading(false));
},[])



  return (
<Box  >
    <Typography variant="h5" fontWeight="bold" mb={2} >
      Infant Monitoring Overview
    </Typography>

  {selectedInfantDetails ? (
      <InfantDetailCard
        infant={selectedInfantDetails}
        onBack={() => {
          setSelectedInfantDetails(null);
          setSubView('Profile'); // Optional: reset subview on back
        }}
        subView={subView}
        setSubView={setSubView}
      />
    ) : (

   <TableContainer
        component={Paper}
        elevation={0}
        sx={{ backgroundColor: '#f1f4f9', p: 2, borderRadius: 4 }}
      >
        <Table
          sx={{
    borderCollapse: 'separate',
    borderSpacing: '0 12px', // horizontal 0, vertical 12px gap
  }}
        >
          <TableHead>
            <TableRow>
              <TableCell><b>Baby</b></TableCell>
              <TableCell><b>Incubator No.</b></TableCell>
              <TableCell><b>Jaundice Status</b></TableCell>
              <TableCell><b>Crying Status</b></TableCell>
              <TableCell><b>Video</b></TableCell>
              <TableCell><b>Doctor</b></TableCell>
              <TableCell><b>Last Update</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Array.isArray(infants) && infants.length > 0 ? (
              infants.map((infant, idx) => (
                
                <TableRow
                  key={idx}
                  hover
                 onClick={() => {
    setSelectedInfantId(infant.id);
    setSelectedInfantDetails(infant);
  }}
                  selected={selectedInfantId === infant.id}
                  sx={{
                    mb: 2,
                    borderRadius: 20,
                    boxShadow: 0,
                    backgroundColor:
                      selectedInfantId === infant.id ? '#f0f3f3' : 'white',
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': {
                      backgroundColor:
                        selectedInfantId === infant.id
                          ? '#e0e5e0'
                          : '#f9f9f9',
                    },
                    '& td': {
                      borderBottom: 'none',
                    },
                    '& td:first-of-type': {
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                    },
                    '& td:last-of-type': {
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                    },
                  }}
                >
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={infant.image} alt={infant.id} />
                      <Typography>{infant.id}</Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{infant.incubator}</TableCell>

                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor:
                            infant.jaundiceStatus === 'Normal'
                              ? 'green'
                              : 'red',
                        }}
                      />
                      <Typography variant="body2">
                        {infant.jaundiceStatus}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor:
                            infant.cryingStatus === 'Normal'
                              ? 'green'
                              : 'orange',
                        }}
                      />
                      <Typography variant="body2">
                        {infant.cryingStatus}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={infant.video}
                      color={infant.video === 'ON' ? 'primary' : 'default'}
                      size="small"
                    />
                  </TableCell>

                  <TableCell>{infant.doctor}</TableCell>
                  <TableCell>{infant.lastUpdate}</TableCell>
                </TableRow>
                
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No infant data available.
                </TableCell>
              </TableRow>
              
            )}
          </TableBody>
   
        </Table>
      </TableContainer>
)}

</Box>



  )
}

export default InfantDetailsContent