import React, { useState } from 'react';
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
          />
          <h3>Charisma</h3>
        </Box>
      </Box>
    </div>
  );
}
