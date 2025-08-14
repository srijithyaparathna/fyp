import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

type Props = {
  label1: string;
  status1: string;
  label2: string;
  status2: string;
};

const getDotColor = (status: string) => {
  const s = status?.toLowerCase();

  if (s.includes('critical') || s.includes('abnormal') || s.includes('severe')) return 'red';
  if (s.includes('warning') || s.includes('jaundice') || s.includes('mild')) return 'orange';
  if (s.includes('normal')) return 'green';

  return 'gray';
};

const StatusIndicator: React.FC<Props> = ({ label1, status1, label2, status2 }) => {
  return (
  <Box
  p={4}
  bgcolor="white"
  borderRadius={5}
  boxShadow={2}
  width={400}
  height={150}
  display="flex"
  flexDirection="column"
  justifyContent="center"
  gap={3} // space between rows
>
  {/* First status */}
  <Box display="flex" alignItems="center">
    <Typography
      variant="body2"
      fontWeight={500}
      sx={{ width: 140 }} // fixed column width for labels
    >
      {label1} :
    </Typography>
    <Typography
      variant="body2"
      fontWeight={600}
      textTransform="capitalize"
      sx={{ width: 100 }} // fixed column width for status text
    >
      {status1 || 'Unknown'}
    </Typography>
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        bgcolor: getDotColor(status1),
        flexShrink: 0, // dot doesn't shrink
      }}
    />
  </Box>

  {/* Second status */}
  <Box display="flex" alignItems="center">
    <Typography
      variant="body2"
      fontWeight={500}
      sx={{ width: 140 }}
    >
      {label2} :
    </Typography>
    <Typography
      variant="body2"
      fontWeight={600}
      textTransform="capitalize"
      sx={{ width: 100 }}
    >
      {status2 || 'Unknown'}
    </Typography>
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        bgcolor: getDotColor(status2),
        flexShrink: 0,
      }}
    />
  </Box>
</Box>

  );
};

export default StatusIndicator;
