import React, { useState, useEffect } from 'react';
import { Button, Dialog } from '@mui/material';

import DisplayCharSheet from './displayCharSheet.jsx';

export default function DisplayChar({ charData }) {
  const [currentChar, setCurrentChar] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    console.log('CharData', charData);
  }, [charData]);

  const openCharDialog = (event) => {
    const { value } = event.target;
    setCurrentChar(charData[value]);
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const editChar = (event) => {
    const { value } = event.target;
  };
  const deleteChar = (event) => {
    const { value } = event.target;
  };
  const charList = charData.map((char, index) => (
    <div>
      <Button onClick={openCharDialog} value={index}>
        {' '}
        {index + 1}
        .
        {' '}
        {char.charInfo.name}
        <Button onClick={editChar} value={index}>Edit</Button>
        <Button onClick={deleteChar} value={index}>Delete</Button>
      </Button>
    </div>
  ));

  return (
    <div>
      <h1>List of characters here</h1>
      {charList}
      {/* add individual character dialog here to render based on state charDialog */}
      <Dialog open={dialogOpen} onClose={handleClose} fullWidth maxWidth="xl">
        <DisplayCharSheet currentChar={currentChar} setCurrentChar={setCurrentChar} />
      </Dialog>
    </div>
  );
}
