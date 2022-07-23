import React, { useEffect, useState } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Person } from '@mui/icons-material';

export default function CharInfo({ charInfo, setCharInfo }) {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [level, setLevel] = useState(0);
  const [className, setClassName] = useState('');
  const [background, setBackground] = useState('');

  const addName = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const addRace = (event) => {
    const { value } = event.target;
    setRace(value);
  };
  const addLevel = (event) => {
    const { value } = event.target;
    setLevel(value);
  };
  const addClassName = (event) => {
    const { value } = event.target;
    setClassName(value);
  };
  const addBackground = (event) => {
    const { value } = event.target;
    setBackground(value);
  };
  useEffect(() => {
    console.log('Name', name);
    console.log('Race', race);
    console.log('level', level);
    console.log('Class', className);
    console.log('Background', background);
    const data = {
      name,
      race,
      level,
      className,
      background,
    };
    setCharInfo(data);
  }, [name, race, level, className, background]);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        name="mainBox"
      >
        <TextField
          label="Name"
          variant="outlined"
          inputProps={{
            style: {
              textAlign: 'center', fontSize: '20px', width: '125px', fontWeight: 'bold',
            },
          }}
          name="Name"
          onChange={addName}
        />
        <TextField
          label="Race"
          variant="outlined"
          inputProps={{
            style: {
              textAlign: 'center', fontSize: '20px', width: '125px', fontWeight: 'bold',
            },
          }}
          name="Race"
          onChange={addRace}
        />
        <TextField
          type="number"
          label="Level"
          variant="outlined"
          inputProps={{
            style: {
              textAlign: 'center', fontSize: '20px', width: '125px', fontWeight: 'bold',
            },
          }}
          name="Level"
          onChange={addLevel}
        />
        <TextField
          label="Class"
          variant="outlined"
          inputProps={{
            style: {
              textAlign: 'center', fontSize: '20px', width: '125px', fontWeight: 'bold',
            },
          }}
          name="Class"
          onChange={addClassName}
        />
        <TextField
          label="Background"
          variant="outlined"
          inputProps={{
            style: {
              textAlign: 'center', fontSize: '20px', width: '125px',
            },
          }}
          name="Background"
          onChange={addBackground}
        />
      </Box>
    </div>
  );
}
