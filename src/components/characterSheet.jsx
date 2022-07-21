import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PhysicalInfo from './physicalInfo.jsx';
import CharacterStats from './charStats.jsx';
import CharInfo from './charInfo.jsx';
import Attacks from './attacks.jsx';

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
  const [charInfo, setCharInfo] = useState({
    Name: '',
    Race: '',
    Level: 0,
    Class: '',
    Background: '',
  });
  const [physicalInfo, setPhysicalInfo] = useState({
    ArmorClass: 0,
    Health: 0,
    Speed: 0,
    Initiative: 0,
  });
  const [skills, setSkills] = useState({});
  const [attacks, setAttacks] = useState([]);
  const [items, setItems] = useState({});

  useEffect(() => {
    // might make axios call on change OR might do it on save
    // take the data and push into the data base with an axios call
    console.log(attacks);
  }, [attacks]);
  return (
    <div>
      <Box
        sx={{
          height: '800px',
          width: '1200px',
          border: 'solid',
          borderColor: 'black',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h1>Character Creation</h1>
        <br />
        <CharInfo charInfo={charInfo} setCharInfo={setCharInfo} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <PhysicalInfo setPhysicalInfo={setPhysicalInfo} physicalInfo={physicalInfo} />
          <Box>
            <CharacterStats setStats={setStats} stats={stats} />
            <Attacks setAttacks={setAttacks} attacks={attacks} />
          </Box>

        </Box>
        <h1>This is the skills</h1>
      </Box>
    </div>

  );
}
