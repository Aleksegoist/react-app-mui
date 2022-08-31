import { Box, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <Typography variant='h6'>Online Friends</Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
