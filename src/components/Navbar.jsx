import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Mail, Notifications } from '@mui/icons-material';
import AvatarImg from '../assets/avatar3.png';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  background: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }}>
          AYDev
        </Typography>
        <Diversity2Icon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar sx={{ wight: 40, height: 40 }} src={AvatarImg} />
        </Icons>
        <UserBox>
          <Avatar sx={{ wight: 40, height: 40 }} src={AvatarImg} />
          <Typography variant='span'>Rick</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
