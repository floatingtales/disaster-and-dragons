import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  InputAdornment, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions, Alert, AlertTitle,
} from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import CharacterSheet from '../components/characterSheet.jsx';
import DisplayChar from '../components/displayChar.jsx';
import ChatBox from '../components/chatBox.jsx';

export default function GamePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  // get the data from the db

  const handleCreateChar = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <div className="avoidTaskbar" id="gamePage">
      <Box sx={{
        height: '80vh',
        width: '45vw',
        border: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
      }}
      >
        <ChatBox />
      </Box>

      {/* box for character side */}
      <Box sx={{
        height: '80vh',
        width: '45vw',
        border: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >

        {alert === true && (
        <Alert severity="success" onClose={() => { setAlert(false); }}>
          <AlertTitle>Character Saved</AlertTitle>
        </Alert>
        )}
        <h1>Character</h1>
        <Button
          sx={{
            height: '20%', width: '20%', border: 'solid',
          }}
          onClose={handleClose}
          onClick={handleCreateChar}
        >
          Enlist Adventurer
        </Button>
        <Dialog open={dialogOpen} onClose={handleClose} fullWidth maxWidth="xl">
          <CharacterSheet setDialogOpen={setDialogOpen} setAlert={setAlert} />
        </Dialog>
        <Box sx={{ height: '80%', width: '95%', border: 'solid' }}>
          <DisplayChar />
        </Box>
      </Box>
    </div>
  );
}
