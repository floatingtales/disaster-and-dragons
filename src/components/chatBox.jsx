import React from 'react';
import TextInput from './textInput.jsx';
import ChatDisplay from './chatDisplay.jsx';

export default function ChatBox({ boardName, chatLogs, socket }) {
  return (
    <div id="chatBox">
      <ChatDisplay chatLogs={chatLogs} />
      <TextInput socket={socket} boardName={boardName} chatLogs={chatLogs} style={{ height: '30%' }} />
    </div>
  );
}
