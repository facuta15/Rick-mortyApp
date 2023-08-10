// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

interface NavbarProps {
  username: string;
  profilePicture: string;
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
