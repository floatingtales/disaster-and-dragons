import React, { useState, useEffect } from 'react';
import {
  Box, Button, InputAdornment, TextField, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';

import axios from 'axios';
import CharacterSheet from './characterSheet.jsx';

export default function DisplayChar() {
  const [charData, setCharData] = useState([]);
  const [charDialog, setCharDialog] = useState(false);
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
    setCharDialog(true);
  };
  const handleClose = () => {
    setCharDialog(false);
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
      {/* add individual character dialog here to render based on state charDialog */}
    </div>
  );
}
