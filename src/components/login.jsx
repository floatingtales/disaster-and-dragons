import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';

export default function Login() {
  const [data, setData] = useState({});

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 450,
          height: 450,
          backgroundColor: 'bisque',
        }}
      >
        <LoginIcon fontSize="large" />
        <TextField
          style={{ width: '300px' }}
          required
          name="userName"
          label="Required"
          placeholder="User Name"
        />
        <TextField
          style={{ width: '300px' }}
          required
          name="password"
          label="Required"
          placeholder="Password"
        />
        <Button variant="contained">
          Login
        </Button>
      </Box>
    </div>
  );
}
