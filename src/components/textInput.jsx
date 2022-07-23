import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { SendRounded } from '@mui/icons-material';

export default function TextInput({ chatLogs, setChatLogs }) {
  const username = 'Jesus 3.0';
  const [chatMsg, setChatMsg] = useState('');

  useEffect(() => {
    console.log(chatLogs);
  }, [chatLogs]);

  const updateChatText = (e) => {
    console.log(e.target.value);
    setChatMsg(e.target.value);
  };

  const sendChat = (e) => {
    e.preventDefault();
    console.log('doing thing');
    const currentChats = [...chatLogs];
    currentChats.push({ username, chatMsg });
    setChatLogs(currentChats);
    setChatMsg('');
  };

  return (
    <div id="textInput">
      <form noValidate autoComplete="off" onSubmit={sendChat}>
        <div id="chatText">
          <TextField
            id="standard-text"
            label="Talk to your fellow adventurers!"
            onChange={updateChatText}
            value={chatMsg}
            style={{ width: '85%' }}
          />
          <Button id="chatSend" variant="contained" color="primary" type="submit" style={{ width: '15%' }}>
            <SendRounded />
          </Button>
        </div>
      </form>
    </div>
  );
}
