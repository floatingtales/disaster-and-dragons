import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import TextInput from './textInput.jsx';
import ChatDisplay from './chatDisplay.jsx';

const socket = io();

export default function ChatBox() {
  localStorage.setItem('boardName', 'test');
  const [chatLogs, setChatLogs] = useState([]);
  const boardName = localStorage.getItem('boardName');

  socket.on('loadBoard', (boardData) => {
    console.log('loading boardData');
    console.log(boardData);
    setChatLogs(boardData.chatLogs);
  });

  useEffect(() => {
    socket.emit('joinBoard', boardName);
  }, []);

  useEffect(() => {
    socket.emit('saveChat', boardName, chatLogs);
  }, [chatLogs]);

  return (
    <div id="chatBox">
      <ChatDisplay chatLogs={chatLogs} />
      <TextInput chatLogs={chatLogs} setChatLogs={setChatLogs} style={{ height: '30%' }} />
    </div>
  );
}
