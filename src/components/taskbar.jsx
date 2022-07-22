import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar({ setCurrentPage }) {
  const goToCharSheet = () => {
    setCurrentPage('charSheet');
  };
  const goToGame = () => {
    setCurrentPage('game');
  };
  const logout = () => null;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Disaster And Dragons
          </Typography>
          <Button color="inherit" onClick={goToCharSheet}>Character Sheet</Button>
          <Button color="inherit" onClick={goToGame}>Game</Button>
          <Button color="inherit" onclick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
