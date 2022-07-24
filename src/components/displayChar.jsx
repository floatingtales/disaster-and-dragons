import React, { useState, useEffect } from 'react';
import { Button, Dialog, Box } from '@mui/material';

import DisplayCharSheet from './displayCharSheet.jsx';

export default function DisplayChar({ charData, socket, boardName }) {
  const [currentChar, setCurrentChar] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    console.log('CharData', charData);
  }, [charData]);

  const openCharDialog = (event) => {
    const { value } = event.target;
    setCurrentChar(charData[value]);
    setCharIndex(value);
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const deleteChar = (event) => {
    const { value } = event.target;
    const allChar = [...charData];
    console.log(allChar);
    allChar.splice(value, 1);
    console.log(allChar);
    socket.emit('deleteChar', boardName, allChar);
  };
  const charList = charData.map((char, index) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      {index + 1}
      .
      <Button onClick={openCharDialog} value={index}>
        {char.charInfo.name}
      </Button>
      <Button onClick={deleteChar} value={index}>Delete</Button>
    </Box>
  ));

  return (
    <div>
      <h1>All Adventurers</h1>
      {charList}
      {/* add individual character dialog here to render based on state charDialog */}
      <Dialog open={dialogOpen} onClose={handleClose} fullWidth maxWidth="xl">
        <DisplayCharSheet currentChar={currentChar} charIndex={charIndex} />
      </Dialog>
    </div>
  );
}
