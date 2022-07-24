import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import TextInput from './textInput.jsx';
import ChatDisplay from './chatDisplay.jsx';

const socket = io();

export default function ChatBox() {
  localStorage.setItem('boardName', 'test');
  const [chatLogs, setChatLogs] = useState([]);
  const boardName = localStorage.getItem('boardName');

  useEffect(() => {
    socket.emit('joinBoard', boardName);
  }, []);

  useEffect(() => {
    socket.on('loadBoard', (boardData) => {
      console.log('loading boardData');
      console.log(boardData);
      setChatLogs(boardData.chatLogs);
    });
  }, [socket]);

  useEffect(() => {
    console.log(chatLogs);
  }, [chatLogs]);

  return (
    <div id="chatBox">
      <ChatDisplay chatLogs={chatLogs} />
      <TextInput socket={socket} boardName={boardName} chatLogs={chatLogs} style={{ height: '30%' }} />
    </div>
  );
}
