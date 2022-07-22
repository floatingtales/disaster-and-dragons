import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import axios from 'axios';
import PhysicalInfo from './physicalInfo.jsx';
import CharacterStats from './charStats.jsx';
import CharInfo from './charInfo.jsx';
import AttacksAndItems from './attacks&items.jsx';
import Skills from './skills.jsx';

export default function CharacterSheet() {
  // Saving the data that will be manipulated with states
  const [stats, setStats] = useState({});
  const [charInfo, setCharInfo] = useState({});
  const [physicalInfo, setPhysicalInfo] = useState([]);
  const [skills, setSkills] = useState({});
  const [attacks, setAttacks] = useState([]);
  const [items, setItems] = useState([]);

  const saveData = async () => {
    const data = {
      stats,
      charInfo,
      physicalInfo,
      skills,
      attacks,
      items,
    };
    // i need to authenticate and send the JWT token as well
    const token = localStorage.authorisedToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const sendData = await axios.post('/characters/createChar', data, config);
    console.log(sendData);
  };
  // listening to each of the data componenets that change and console logs them
  useEffect(() => {
    console.log('character Stats', stats);
  }, [stats]);
  useEffect(() => {
    console.log('Character Information', charInfo);
  }, [charInfo]);
  useEffect(() => {
    console.log('Skills', skills);
  }, [skills]);
  useEffect(() => {
    // might make axios call on change OR might do it on save
    // take the data and push into the data base with an axios call
    console.log('Attacks', attacks);
    console.log('Items', items);
  }, [attacks, items]);
  useEffect(() => {
    console.log('Physical Information', physicalInfo);
  }, [physicalInfo]);
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
            <AttacksAndItems setAttacks={setAttacks} attacks={attacks} items={items} setItems={setItems} />
          </Box>
        </Box>
        <Skills skills={skills} setSkills={setSkills} />
      </Box>
      <Button onClick={saveData}>Create your avatar</Button>
    </div>
  );
}
