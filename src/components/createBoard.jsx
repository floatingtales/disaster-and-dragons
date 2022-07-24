import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, Box } from '@mui/material';
import axios from 'axios';

export default function Createboard({ setCurrentPage }) {
  const [boardName, setBoardName] = useState('');
  const goToGamePage = async () => {
    console.log('value at gotogamepage', boardName);
    const token = localStorage.authorisedToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const data = { boardName };
    localStorage.setItem('boardName', `${boardName}`);
    const sendData = await axios.post('/boards/createBoard', data, config);
    console.log('Data from posting into board', sendData);
    setCurrentPage('game');
  };
  const addName = (event) => {
    const { value } = event.target;
    setBoardName(value);
  };
  return (
    <div className="avoidTaskbar">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid',
      }}
      >
        <h1>Create your Adventure</h1>
        <TextField label="Adventure Name" variant="outlined" onChange={addName} />
        <Button onClick={goToGamePage}>Begin Adventure</Button>
      </Box>
    </div>
  );
}
