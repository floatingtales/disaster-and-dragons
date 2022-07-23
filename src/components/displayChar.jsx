import React, { useState, useEffect } from 'react'; import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  InputAdornment, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function DisplayChar() {
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    console.log('CharData', charData);
  }, [charData]);

  const getCharData = async () => {
    // getting auth token
    const token = localStorage.authorisedToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const charData = await axios.get('/characters/getCharData', config);
    setCharData(charData.data.data);
  };
  const openCharDialog = (event) => {
    const { value } = event.target;
    console.log(charData[value]);
  };
  const charList = charData.map((char, index) => (
    <div>
      <Button onClick={openCharDialog} value={index}>
        {' '}
        {index + 1}
        .
        {' '}
        {char.charInfo.name}
      </Button>
    </div>
  ));

  return (
    <div>
      <h1>List of characters here</h1>
      <Button onClick={getCharData}>Get All Adventurers</Button>
      {charList}
    </div>
  );
}
