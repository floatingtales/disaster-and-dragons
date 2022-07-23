import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
import TextInput from './textInput.jsx';
import ChatDisplay from './chatDisplay.jsx';

// const socket = io();

export default function ChatBox() {
  localStorage.setItem('boardName', 'test');
  const [chatLogs, setChatLogs] = useState([]);
  const boardName = localStorage.getItem('boardName');

  useEffect(() => {
    // on load retrieve all chats on board
    const getAllChats = async () => {
      let boardData;
      try {
        boardData = await axios.get(`/boards/allChats/${boardName}`);
        setChatLogs(boardData.chatLogs);
      } catch (err) {
        console.log(err);
      }
    };
    getAllChats();
  }, []);

  return (
    <div id="chatBox">
      <ChatDisplay chatLogs={chatLogs} />
      <TextInput chatLogs={chatLogs} setChatLogs={setChatLogs} style={{ height: '30%' }} />
    </div>
  );
}
