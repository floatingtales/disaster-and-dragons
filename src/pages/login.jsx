import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Login as LoginIcon } from '@mui/icons-material';
import axios from 'axios';

export default function Login({ setCurrentPage }) {
  const [loginCredentials, setloginCredentials] = useState('');
  const [password, setPassword] = useState('');

  // saving email and password in the state
  const handleLoginChange = (event) => {
    const newEmail = event.target.value;
    setloginCredentials(newEmail);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  // what happens on click login
  const handleLogin = async () => {
    const data = { loginCredentials, password };

    let checkLogin;
    try {
      checkLogin = await axios.post('/users/login', data);
    } catch (err) {
      console.log(err.response.data.msg);
      return;
    }
    const { accessToken, username } = checkLogin.data;
    localStorage.setItem('authorisedToken', accessToken);
    localStorage.setItem('username', username);
    setCurrentPage('mainPage');
  };

  return (
    <div id="login">
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
          name="email"
          label="Email or Username"
          placeholder="Email or Username"
          onChange={handleLoginChange}
        />
        <TextField
          style={{ width: '300px' }}
          required
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </div>
  );
}
