import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { SendRounded } from '@mui/icons-material';

export default function TextInput({ chatLogs, setChatLogs }) {
  const username = window.localStorage.getItem('username');
  const [chatMsg, setChatMsg] = useState('');

  const diceRoll = (num, face) => {
    const resultArr = [];

    for (let i = 0; i < num; i += 1) {
      const toPush = Math.floor(Math.random() * face) + 1;
      resultArr.push(toPush);
    }
    return resultArr;
  };

  useEffect(() => {
    console.log(chatLogs);
  }, [chatLogs]);

  const updateChatText = (e) => {
    console.log(e.target.value);
    setChatMsg(e.target.value);
  };

  const sendChat = (e) => {
    e.preventDefault();
    const currentChats = [...chatLogs];
    if (chatMsg.split(' ')[0] === '/r') {
      const diceRollMsg = chatMsg.split(' ')[1];
      const rollComputer = 'Rollie';
      if (Number.isNaN(Number(diceRollMsg.split('d')[0])) || Number.isNaN(Number(diceRollMsg.split('d')[1]))) {
        const diceRollErrMsg = "that's not the way to roll a dice! use this format '/r <number of dice>d<sides of dice>'";
        currentChats.push({ username: rollComputer, chatMsg: diceRollErrMsg });
      } else {
        const num = diceRollMsg.split('d')[0];
        const face = diceRollMsg.split('d')[1];
        const resultArray = diceRoll(num, face);

        let output = `Rolling ${num}d${face} \n`;
        let runningTotal = 0;
        resultArray.forEach((result, index) => {
          runningTotal += result;
          output += `Roll ${index + 1}: ${result} \n`;
        });
        output += `Total value: ${runningTotal}`;
        currentChats.push({ username: rollComputer, chatMsg: output });
      }
    } else {
      currentChats.push({ username, chatMsg });
    }
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
