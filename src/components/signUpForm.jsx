import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FaceIcon from '@mui/icons-material/Face';

import axios from 'axios';

export default function SignUpForm({ loginorsignup, setLoginorsignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setLoginorsignup(true);
  };
  const handleSignUp = async () => {
    // set something here that renders login page instead
    // a state that is passed as prop that on change will render login
    /// /base / has signup form
    // sign up form has links to login or on sign up go to login
    // get data from the states
    // axios call to backend
    const data = { email, password, username };
    await axios.post('/users/signup', data);
    setLoginorsignup(true);
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
  // const signup
  // redirect to login and send data through axios call
  // save the state of text on change
  return (
    <div>
      s
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
          onChange={settingEmail}
        />
        <TextField
          style={{ width: '300px' }}
          required
          name="password"
          label="Required"
          placeholder="Password"
          onChange={settingPassword}
        />
        <TextField
          style={{ width: '300px' }}
          name="userName"
          placeholder="User Name"
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
