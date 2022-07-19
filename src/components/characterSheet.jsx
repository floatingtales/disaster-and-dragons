import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { Checkbox } from '@mui/material';
import Taskbar from './taskbar.jsx';
import PhysicalInfo from './physicalInfo.jsx';

export default function CharacterSheet() {
  // Saving the data that will be manipulated with states
  const [stats, setStats] = useState({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  });
  const [charInfo, setCharInfo] = useState({});
  const [physicalInfo, setPhysicalInfo] = useState({
    ArmorClass: 0,
    Health: 0,
    Speed: 0,
    Initiative: 0,
  });
  const [skills, setSkills] = useState({});
  const [attacks, setAttacks] = useState({});
  const [items, setItems] = useState({});
  return (
    <div>
      <h1>This is the character sheet</h1>
      <Box
        sx={{
          height: '750px',
          width: '750px',
          border: 'solid',
          borderColor: 'black',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PhysicalInfo setPhysicalInfo={setPhysicalInfo} physicalInfo={physicalInfo} />
      </Box>
    </div>

  );
}
