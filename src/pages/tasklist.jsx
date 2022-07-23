import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { Checkbox } from '@mui/material';

// here i will load the game of canvas

// chat box component
// canvas component
export default function mainPage() {
  return (
    <div>
      <Box>
        <LoginIcon fontSize="large" />
        <h1>This is the main Page</h1>
        <h2>
          Components to be added:
          <ol>
            <li>Chatbox component with sockets</li>
            <li>Rules Component</li>
            <li>Game list Component</li>
            <li>Sockets character data</li>
            <li>
              Things to do:
              <ol>
                Get models up and running
                <Checkbox />
              </ol>
              <ol>
                Set up game creation for members
                <Checkbox />
              </ol>
              <ol>
                Get all available games
                <Checkbox />
              </ol>
              <ol>
                CRUD for game creation, edition, joining, leaving
                <Checkbox />
              </ol>
              <ol>
                Character Creation component
                <Checkbox />
              </ol>
            </li>
          </ol>
        </h2>
      </Box>
    </div>
  );
}
