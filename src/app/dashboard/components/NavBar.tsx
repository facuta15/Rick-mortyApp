// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';
import { Route } from '@/app/models';

interface NavbarProps {
  username: string;
  profilePicture: string;
}

interface Props{
  pathNames: Route[];
}

const Navbar: React.FC<NavbarProps> = ({ username, profilePicture }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar
          alt="Profile Picture"
          src={profilePicture}
          sx={{ marginRight: '1rem' }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {username}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
