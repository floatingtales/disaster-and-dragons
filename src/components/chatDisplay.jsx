import React, { useEffect } from 'react';
import { Box, Grid, List } from '@mui/material';

export default function ChatDisplay({ chatLogs }) {
  useEffect(() => {
    console.log(chatLogs);
  }, [chatLogs]);

  const chatData = chatLogs.map((chat, index) => {
    const allText = chat.chatMsg.split('\n').map((lines) => <h2>{lines}</h2>);
    // blocks of differenet colors chat
    let jesus = '';
    if (index % 2) {
      jesus = 'even';
    } else {
      jesus = 'odd';
    }
    return (
      <Box className={jesus}>
        {chat.username}
        :
        {allText}

      </Box>
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
