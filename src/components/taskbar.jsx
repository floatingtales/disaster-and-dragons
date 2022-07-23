import * as React from 'react';
import {
  AppBar, Box, Toolbar, Typography, Button,
} from '@mui/material';

export default function ButtonAppBar({ setCurrentPage }) {
  const goToCharSheet = () => {
    setCurrentPage('charSheet');
  };
  const goToGame = () => {
    setCurrentPage('game');
  };
  const goToChat = () => {
    setCurrentPage('chat');
  };
  const logout = () => {
    localStorage.clear();
    setCurrentPage('signUp');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Disaster And Dragons
          </Typography>
          <Button color="inherit" onClick={goToChat}>Chat Room</Button>
          <Button color="inherit" onClick={goToCharSheet}>Character Sheet</Button>
          <Button color="inherit" onClick={goToGame}>Game</Button>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
