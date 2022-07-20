import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar({ setLoginorsignup }) {
  const goToCharSheet = () => {
    setLoginorsignup('charSheet');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Disaster And Dragons
          </Typography>
          <Button color="inherit" onClick={goToCharSheet}>Games</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
