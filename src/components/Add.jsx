import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import { useState } from 'react';
import Avatar3 from '../assets/Client3.png';
import { Stack } from '@mui/system';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px) ', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={Avatar3} sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant='span'>
              Rick Astley
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <ImageIcon color='secondary' />
            <VideoCameraBackIcon color='success' />
            <PersonAddIcon color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
