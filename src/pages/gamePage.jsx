import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  InputAdornment, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import axios from 'axios';
import CharacterSheet from '../components/characterSheet.jsx';

export default function GamePage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  // get the data from the db
  const getCharData = async () => {
    // getting auth token
    const token = localStorage.authorisedToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const charData = await axios.get('/characters/getCharData', config);
    console.log('Recieved char data in gamePage', charData);
  };
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
        <h1>Chat</h1>
        <Box sx={{
          height: '65%', width: '95%', border: 'solid', paddingBottom: '5px',
        }}
        >
          Chat display box
        </Box>
        <h3>Chatbox</h3>
        <TextField
          sx={{
            height: '30%',
            width: '95%',
          }}
          label="Chat input box"
          multiline
          rows={4}
          defaultValue="Type here"
          // How to make this icon into a button?
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendRoundedIcon sx={{ border: 'solid' }} />
              </InputAdornment>
            ),
          }}
        />
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
          <CharacterSheet />
        </Dialog>
        <Box sx={{ height: '80%', width: '95%', border: 'solid' }}>
          <Button onClick={getCharData}>Get All Adventurers</Button>
        </Box>

      </Box>
    </div>
  );
}
