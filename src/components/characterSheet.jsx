import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PhysicalInfo from './physicalInfo.jsx';
import CharacterStats from './charStats.jsx';
import CharInfo from './charInfo.jsx';
import Skills from './skills.jsx';

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
  const [attacks, setAttacks] = useState({});
  const [items, setItems] = useState({});

  useEffect(() => {
    // might make axios call on change OR might do it on save
    // take the data and push into the data base with an axios call
    console.log(stats, charInfo, physicalInfo, skills, items);
  }, [stats, charInfo, physicalInfo, skills, items]);
  return (
    <div>
      <h1>This is the character sheet</h1>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          border: 'solid',
          borderColor: 'black',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CharInfo charInfo={charInfo} setCharInfo={setCharInfo} />
        <PhysicalInfo setPhysicalInfo={setPhysicalInfo} physicalInfo={physicalInfo} />
        <CharacterStats setStats={setStats} stats={stats} />
        <Skills setSkills={setSkills} skill={skills} />
      </Box>
    </div>

  );
}
