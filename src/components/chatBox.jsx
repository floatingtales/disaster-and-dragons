import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextInput from './textInput.jsx';

export default function ChatBox() {
  const [chatLogs, setChatLogs] = useState([]);

  useEffect(() => {
    // on load retrieve all chats on board
    const getAllChats = async () => {
      let allChats;
      try {
        allChats = await axios.get('/board/allChats');
        //        setChatLogs(allChats);
      } catch (err) {
        console.log(err);
      }
    };
    getAllChats();
  }, []);

  const chatData = chatLogs.map((chat) => (
    <div>
      {chat.username}
      {chat.chatMsg}
    </div>
  ));

  return (
    <div id="chatBox">
      <TextInput chatLogs={chatLogs} setChatLogs={setChatLogs} style={{ height: '30%' }} />
      <div>
        {chatData}
      </div>
    </div>
  );
}
