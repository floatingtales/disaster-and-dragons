import * as React from 'react';
import {
  AppBar, Box, Toolbar, Typography, Button,
} from '@mui/material';

export default function ButtonAppBar({ setCurrentPage }) {
  const goToMainPage = () => {
    setCurrentPage('mainPage');
  };
  const logout = () => {
    localStorage.clear();
    setCurrentPage('signUp');
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <Button color="inherit" onClick={logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>Hello</h1>
      <img src="/assets/images/logo.png" height="30%" width="30%" alt="DND logo" onClick={goToMainPage} />
    </Box>
  );
}
