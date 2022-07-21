import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment, Typography } from '@mui/material';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import FestivalSharpIcon from '@mui/icons-material/FestivalSharp';
import BedtimeTwoToneIcon from '@mui/icons-material/BedtimeTwoTone';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import HistoryEduSharpIcon from '@mui/icons-material/HistoryEduSharp';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import SportsMmaTwoToneIcon from '@mui/icons-material/SportsMmaTwoTone';
import MedicalServicesSharpIcon from '@mui/icons-material/MedicalServicesSharp';
import ForestTwoToneIcon from '@mui/icons-material/ForestTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import RecordVoiceOverTwoToneIcon from '@mui/icons-material/RecordVoiceOverTwoTone';
import ChurchTwoToneIcon from '@mui/icons-material/ChurchTwoTone';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Skills({ skills, setSkills }) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'solid',
        }}
        name="mainBox"
      >

        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Acrobatics"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Acrobatics</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FestivalSharpIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Arcana"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Arcana</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BedtimeTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Athletics"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Athletics</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SportsGymnasticsSharpIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Deception"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Deception</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InterpreterModeIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="History"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">History</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HistoryEduSharpIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Insight"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Insight</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RemoveRedEyeRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Intimidation"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Intimidation</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SportsMmaTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Medicine"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Medicine</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MedicalServicesSharpIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Nature"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Nature</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ForestTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Perception"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Perception</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Persuasion"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Persuasion</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RecordVoiceOverTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Religion"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Religion</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ChurchTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          inputProps={{ style: { textAlign: 'center', fontSize: '30px', width: '50px' } }}
          name="Stealth"
          variant="standard"
          label={
            <Typography variant="headline" component="h3">Stealth</Typography>
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VisibilityOffOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

      </Box>
    </div>
  );
}
