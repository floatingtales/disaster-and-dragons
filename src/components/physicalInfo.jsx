import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { Checkbox, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SecurityIcon from '@mui/icons-material/Security';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import StarIcon from '@mui/icons-material/Star';
import Taskbar from './taskbar.jsx';

export default function BackgroundInfo({ physicalInfo, setPhysicalInfo }) {
  console.log(physicalInfo);
  return (
    <div>
      <h1>This is the physical information component</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        name="mainBox"
      >
        <Box
          sx={{
            height: '125px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="ArmorClassBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '25px' } }}
            name="ArmorClass"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SecurityIcon />
                </InputAdornment>
              ),
            }}
          />
          <h3>Armor Class</h3>
        </Box>

        <Box
          sx={{
            height: '125px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="HealthBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '25px' } }}
            name="Health"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HealthAndSafetyIcon />
                </InputAdornment>
              ),
            }}
          />
          <h3>Health</h3>
        </Box>
        <Box
          sx={{
            height: '125px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="SpeedBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '25px' } }}
            name="Speed"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DirectionsRunIcon />
                </InputAdornment>
              ),
            }}
          />
          <h3>Speed</h3>
        </Box>
        <Box
          sx={{
            height: '125px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="InititativeBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '25px' } }}
            name="Initiative"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StarIcon />
                </InputAdornment>
              ),
            }}
          />
          <h3>Initiative</h3>
        </Box>
      </Box>
    </div>
  );
}
