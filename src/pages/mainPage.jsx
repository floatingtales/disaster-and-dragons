import React from 'react';
import Button from '@mui/material/Button';

export default function mainPage({ setCurrentPage }) {
  const createBoard = () => {
    // create a board creation form??
    // just create a board that enables the user to input name of the board
    setCurrentPage('createBoard');
  };
  return (
    <div className="avoidTaskbar">
      <Button variant="contained" onClick={createBoard}>Click here to create Board</Button>
    </div>
  );
}
