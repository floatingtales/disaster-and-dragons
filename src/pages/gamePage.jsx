import React, { useState, useEffect } from 'react';
import ChatBox from '../components/chatBox.jsx';

export default function GamePage() {
  return (
    <div className="avoidTaskbar">
      <h1>This is the game page</h1>
      <ChatBox />
      <h2>Character display</h2>
    </div>
  );
}
