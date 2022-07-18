import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';

export default function Login({ setLoginorsignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // data to be used for axios call
  const data = { email, password };
  // saving email and password in the state
  const settingEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };
  const settingPassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  // what happens on click login
  const handleLogin = async () => {
    const checkLogin = await axios.post('/users/login', data);
    // I am getting the token back in checkLogin.data
    console.log('checkLogin data', checkLogin);
    // if password is wrog the messsage will be here
    console.log(checkLogin.data);
    // if password is right the token will be here
    console.log(checkLogin.data.accessToken);
    localStorage.setItem('authorisedToken', checkLogin.data.accessToken);
    // check fo0r authentication before going into mainPage?
    setLoginorsignup('mainPage');
  };

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
          name="email"
          label="Required"
          placeholder="Email"
          onChange={settingEmail}
        />
        <TextField
          style={{ width: '300px' }}
          required
          type="password"
          name="password"
          label="Required"
          placeholder="Password"
          onChange={settingPassword}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </div>
  );
}
