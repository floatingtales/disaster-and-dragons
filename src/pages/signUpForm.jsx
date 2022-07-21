import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FaceIcon from '@mui/icons-material/Face';

import axios from 'axios';

export default function SignUpForm({ setLoginorsignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setLoginorsignup('login');
  };
  const handleSignUp = async () => {
    // setting the data from signupForm
    const data = { email, password, username };
    // posting this data into the database
    await axios.post('/users/signup', data);
    // changing state to render login page
    setLoginorsignup('login');
  };
  const settingEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };
  const settingPassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  const settingUsername = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };
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
          label="Email"
          placeholder="Email"
          onChange={settingEmail}
        />
        <TextField
          style={{ width: '300px' }}
          required
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          onChange={settingPassword}
        />
        <TextField
          style={{ width: '300px' }}
          required
          name="userName"
          label="Username"
          placeholder="Username"
          onChange={settingUsername}
        />
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Button variant="contained" onClick={handleLogin}>
          Go to Login
        </Button>
      </Box>
    </div>
  );
}
