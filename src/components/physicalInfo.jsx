import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import StarIcon from '@mui/icons-material/Star';

export default function BackgroundInfo({ physicalInfo, setPhysicalInfo }) {
  const [armorClass, setArmorClass] = useState(0);
  const [health, setHealth] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [initiative, setInitiative] = useState(0);

  useEffect(() => {
    console.log('armorClass', armorClass);
    console.log('health', health);
    console.log('speed', speed);
    console.log('initiative', initiative);
    const data = {
      armorClass,
      health,
      speed,
      initiative,
    };
    console.log(data);
    setPhysicalInfo(data);
  }, [armorClass, health, speed, initiative]);
  // need to push all the data into the main state

  const addArmorClass = (event) => {
    const { value } = event.target;
    setArmorClass(value);
  };
  const addHealth = (event) => {
    const { value } = event.target;
    setHealth(value);
  };
  const addSpeed = (event) => {
    const { value } = event.target;
    setSpeed(value);
  };
  const addInitiative = (event) => {
    const { value } = event.target;
    setInitiative(value);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
            onChange={addArmorClass}
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
            onChange={addHealth}
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
            onChange={addSpeed}
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
            onChange={addInitiative}
          />
          <h3>Initiative</h3>
        </Box>
      </Box>
    </div>
  );
}
