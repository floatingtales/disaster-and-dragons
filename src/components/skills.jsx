import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment, Typography } from '@mui/material';
import {
  FestivalSharp, BedtimeTwoTone, SportsGymnasticsSharp, InterpreterMode, HistoryEduSharp, RemoveRedEyeRounded, SportsMmaTwoTone, MedicalServicesSharp, ForestTwoTone, PersonSearchTwoTone, RecordVoiceOverTwoTone, ChurchTwoTone, VisibilityOffOutlined,
} from '@mui/icons-material';

export default function Skills({ skills, setSkills }) {
  const [acrobatics, setAcrobatics] = useState(0);
  const [arcana, setArcana] = useState(0);
  const [athletics, setAthletics] = useState(0);
  const [deception, setDeception] = useState(0);
  const [history, setHistory] = useState(0);
  const [insight, setInsight] = useState(0);
  const [intimidation, setIntimidation] = useState(0);
  const [medicine, setMedicine] = useState(0);
  const [nature, setNature] = useState(0);
  const [perception, setPerception] = useState(0);
  const [persuasion, setPersuasion] = useState(0);
  const [religion, setReligion] = useState(0);
  const [stealth, setStealth] = useState(0);

  const addAcrobatics = (event) => {
    const { value } = event.target;
    setAcrobatics(value);
  };
  const addArcana = (event) => {
    const { value } = event.target;
    setArcana(value);
  };
  const addAthletics = (event) => {
    const { value } = event.target;
    setAthletics(value);
  };
  const addDeception = (event) => {
    const { value } = event.target;
    setDeception(value);
  };
  const addHistory = (event) => {
    const { value } = event.target;
    setHistory(value);
  };
  const addInsight = (event) => {
    const { value } = event.target;
    setInsight(value);
  };
  const addIntimidation = (event) => {
    const { value } = event.target;
    setIntimidation(value);
  };
  const addMedicine = (event) => {
    const { value } = event.target;
    setMedicine(value);
  };
  const addNature = (event) => {
    const { value } = event.target;
    setNature(value);
  };
  const addPerception = (event) => {
    const { value } = event.target;
    setPerception(value);
  };
  const addPersuasion = (event) => {
    const { value } = event.target;
    setPersuasion(value);
  };
  const addReligion = (event) => {
    const { value } = event.target;
    setReligion(value);
  };
  const addStealth = (event) => {
    const { value } = event.target;
    setStealth(value);
  };

  useEffect(() => {
    console.log('acrobatics', acrobatics);
    console.log('arcana', arcana);
    console.log('athletics', athletics);
    console.log('deception', deception);
    console.log('history', history);
    console.log('insight', insight);
    console.log('intimidation', intimidation);
    console.log('medicine', medicine);
    console.log('nature', nature);
    console.log('perception', perception);
    console.log('persuasion', persuasion);
    console.log('religion', religion);
    console.log('stealth', stealth);
    const data = {
      acrobatics,
      arcana,
      athletics,
      deception,
      history,
      insight,
      intimidation,
      medicine,
      nature,
      perception,
      persuasion,
      religion,
      stealth,
    };
    setSkills(data);
  }, [acrobatics, arcana, athletics, deception, history, insight, intimidation, medicine, nature, perception, persuasion, religion, stealth]);

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
                <FestivalSharp />
              </InputAdornment>
            ),
          }}
          onChange={addAcrobatics}
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
                <BedtimeTwoTone />
              </InputAdornment>
            ),
          }}
          onChange={addArcana}

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
                <SportsGymnasticsSharp />
              </InputAdornment>
            ),
          }}
          onChange={addAthletics}
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
                <InterpreterMode />
              </InputAdornment>
            ),
          }}
          onChange={addDeception}
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
                <HistoryEduSharp />
              </InputAdornment>
            ),
          }}
          onChange={addHistory}
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
                <RemoveRedEyeRounded />
              </InputAdornment>
            ),
          }}
          onChange={addInsight}
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
                <SportsMmaTwoTone />
              </InputAdornment>
            ),
          }}
          onChange={addIntimidation}
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
                <MedicalServicesSharp />
              </InputAdornment>
            ),
          }}
          onChange={addMedicine}
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
                <ForestTwoTone />
              </InputAdornment>
            ),
          }}
          onChange={addNature}
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
                <PersonSearchTwoTone />
              </InputAdornment>
            ),
          }}
          onChange={addPerception}
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
                <RecordVoiceOverTwoTone />
              </InputAdornment>
            ),
          }}
          onChange={addPersuasion}
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
                <ChurchTwoTone />
              </InputAdornment>
            ),
          }}
          onChange={addReligion}
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
                <VisibilityOffOutlined />
              </InputAdornment>
            ),
          }}
          onChange={addStealth}
        />
      </Box>
    </div>
  );
}
