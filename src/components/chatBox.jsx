import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextInput from './textInput.jsx';

export default function ChatBox() {
  const [chatLogs, setChatLogs] = useState([]);

  let chatData;

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

  useEffect(() => {
    chatData = chatLogs.map((chat) => (
      <div>
        {chat.username}
        {chat.chatMsg}
      </div>
    ));
  }, [chatLogs]);

  return (
    <div id="chatBox">
      <TextInput chatLogs={chatLogs} setChatLogs={setChatLogs} />
      {chatData}
    </div>
  );
}
