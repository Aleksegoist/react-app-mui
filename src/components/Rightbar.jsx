import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import Avatar1 from '../assets/Client1.png';
import Avatar2 from '../assets/Client2.png';
import Avatar3 from '../assets/Client3.png';
import Avatar4 from '../assets/Client4.png';
import Avatar5 from '../assets/avatar3.png';
import Verstapen from '../assets/verstapen.jpg';
import Alonso from '../assets/alonso.jpg';
import Norris from '../assets/norris.jpg';
// import Ricardo from '../assets/ricardo.jpg';
// import Sainz from '../assets/sainz.jpg';
// import Shumi from '../assets/schumacher.jpg';
// import Vettel from '../assets/vettel.jpg';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt='Remy Sharp' src={Avatar1} />
          <Avatar alt='Travis Howard' src={Avatar2} />
          <Avatar alt='Cindy Baker' src={Avatar3} />
          <Avatar alt='Agnes Walker' src={Avatar4} />
          <Avatar alt='Trevor Henderson' src={Avatar5} />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={Verstapen} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={Alonso} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={Norris} alt='' />
          </ImageListItem>
          {/* <ImageListItem>
            <img src={Ricardo} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={Sainz} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={Shumi} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={Vettel} alt='' />
          </ImageListItem> */}
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src={Avatar1} />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src={Avatar2} />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src={Avatar3} />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
