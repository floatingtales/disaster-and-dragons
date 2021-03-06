import React, { useState, useEffect } from 'react';
import {
  Button, Box, TextField, InputAdornment, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions, Alert, AlertTitle,
} from '@mui/material';
import { io } from 'socket.io-client';

import CharacterSheet from '../components/characterSheet.jsx';
import DisplayChar from '../components/displayChar.jsx';
import ChatBox from '../components/chatBox.jsx';

const socket = io();

export default function GamePage() {
  const boardName = localStorage.getItem('boardName');

  const [chatLogs, setChatLogs] = useState([]);
  const [charData, setCharData] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  // socket connection
  useEffect(() => {
    socket.emit('joinBoard', boardName);
  }, []);

  useEffect(() => {
    // getting data from backend

    socket.on('loadBoard', (boardData) => {
      setChatLogs(boardData.chatLogs);
      setCharData(boardData.characters);
    });

    socket.on('loadChat', (boardData) => {
      console.log('on load chat frontend');
      setChatLogs(boardData.chatLogs);
    });

    socket.on('loadChar', (boardData) => {
      setCharData(boardData.characters);
    });
  }, [socket]);

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
        <ChatBox boardName={boardName} chatLogs={chatLogs} socket={socket} />
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
          <CharacterSheet boardName={boardName} socket={socket} setDialogOpen={setDialogOpen} setAlert={setAlert} />
        </Dialog>
        <Box sx={{ height: '80%', width: '95%', border: 'solid' }}>
          <DisplayChar charData={charData} socket={socket} boardName={boardName} />
        </Box>
      </Box>
    </div>
  );
}
