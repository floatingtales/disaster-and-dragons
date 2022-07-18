import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';

export default function Canvas() {
  return (
    <div>
      <Box>
        {/* Import canvas file here */}
        <canvas
          width={400}
          height={400}
        />
      </Box>
    </div>
  );
}
