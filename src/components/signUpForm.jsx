import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FaceIcon from '@mui/icons-material/Face';

export default function SignUpForm() {
  // const signup
  // redirect to login and send data through axios call
  // save the state of text on change
  return (
    <div>
      <Box
        marginX={5}
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
        <FaceIcon fontSize="large" />
        <TextField
          style={{ width: '300px' }}
          required
          id="outlined-required"
          label="Required"
          placeholder="Email"
        />
        <TextField
          style={{ width: '300px' }}
          required
          name="password"
          label="Required"
          placeholder="Password"
        />
        <TextField
          style={{ width: '300px' }}
          name="userName"
          placeholder="User Name"
        />
        <Button variant="contained" onClick="/signUpD">
          Sign Up
        </Button>
      </Box>
    </div>
  );
}
