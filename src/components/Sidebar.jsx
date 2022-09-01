import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
