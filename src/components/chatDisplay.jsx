import React, { useEffect } from 'react';
import { Grid, List } from '@mui/material';

export default function ChatDisplay({ chatLogs }) {
  useEffect(() => {
    console.log(chatLogs);
  }, [chatLogs]);

  const chatData = chatLogs.map((chat) => {
    if (chat.chatMsg) {
      const allText = chat.chatMsg.split('\n').map((lines) => <p>{lines}</p>);
      return (
        <List>
          {chat.username}
          {allText}
        </List>
      );
    }
    return (
      <div />
    );
  });

  return (
    <div id="chatDisplay">
      <Grid
        item
        className="flex-col-scroll"
      >
        {chatData}
      </Grid>
    </div>
  );
}
