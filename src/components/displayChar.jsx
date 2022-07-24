import React, { useState, useEffect } from 'react';
import {
  Box, Button, InputAdornment, TextField, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';

import axios from 'axios';
import DisplayCharSheet from './displayCharSheet.jsx';

export default function DisplayChar() {
  const [charData, setCharData] = useState([]);
  const [currentChar, setCurrentChar] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
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
    setCurrentChar(charData[value]);
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
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
      <Dialog open={dialogOpen} onClose={handleClose} fullWidth maxWidth="xl">
        <DisplayCharSheet currentChar={currentChar} setCurrentChar={setCurrentChar} />
      </Dialog>
    </div>
  );
}
