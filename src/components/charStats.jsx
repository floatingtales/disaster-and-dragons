import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import FortIcon from '@mui/icons-material/Fort';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

export default function CharStats({ stats, setStats }) {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelliegence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);

  // functions to add onchange into local state
  const addStrength = (event) => {
    const { value } = event.target;
    setStrength(value);
  };
  const addDexterity = (event) => {
    const { value } = event.target;
    setDexterity(value);
  };
  const addConstitution = (event) => {
    const { value } = event.target;
    setConstitution(value);
  };
  const addIntelligence = (event) => {
    const { value } = event.target;
    setIntelliegence(value);
  };
  const addWisdom = (event) => {
    const { value } = event.target;
    setWisdom(value);
  };
  const addCharisma = (event) => {
    const { value } = event.target;
    setCharisma(value);
  };

  useEffect(() => {
    console.log('Strength', strength);
    console.log('Dexterity', dexterity);
    console.log('Constitution', constitution);
    console.log('Intelligence', intelligence);
    console.log('Wisdom', wisdom);
    console.log('Charisma', charisma);
    const data = {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
    };
    setStats(data);
  }, [strength, dexterity, constitution, intelligence, wisdom, charisma]);
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
        <Box
          sx={{
            height: '75 px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="StrengthBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
            name="StrengthStat"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FitnessCenterIcon />
                </InputAdornment>
              ),
            }}
            onChange={addStrength}
          />
          <h3>Strength</h3>
        </Box>
        <Box
          sx={{
            height: '75 px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="DexterityBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
            name="DexterityStat"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SignLanguageIcon />
                </InputAdornment>
              ),
            }}
            onChange={addDexterity}
          />
          <h3>Dexterity</h3>
        </Box>
        <Box
          sx={{
            height: '75 px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="ConstitutionBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
            name="ConstitutionStat"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FortIcon />
                </InputAdornment>
              ),
            }}
            onChange={addConstitution}
          />
          <h3>Constitution</h3>
        </Box>
        <Box
          sx={{
            height: '75 px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="IntelligenceBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
            name="IntelligenceStat"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PsychologyIcon />
                </InputAdornment>
              ),
            }}
            onChange={addIntelligence}
          />
          <h3>Intelligence</h3>
        </Box>
        <Box
          sx={{
            height: '75 px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="WisdomBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
            name="WisdomStat"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            onChange={addWisdom}
          />
          <h3>Wisdom</h3>
        </Box>
        <Box
          sx={{
            height: '75 px',
            width: '125px',
            border: 'solid',
            borderColor: 'black',
            borderRadius: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name="CharismaBox"
        >
          <TextField
            type="number"
            inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
            name="CharismaStat"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RecordVoiceOverIcon />
                </InputAdornment>
              ),
            }}
            onChange={addCharisma}
          />
          <h3>Charisma</h3>
        </Box>
      </Box>
    </div>
  );
}
