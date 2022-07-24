import React, { useState, useEffect } from 'react';
import {
  Box, Button, InputAdornment, TextField, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';
import axios from 'axios';

export default function EditCharComponent({ boardName, charIndex, currentChar }) {
  // axios call get the characters data
  // then take the index
  const attackList = currentChar.attacks.map((attack) => (
    <Box>
      <TextField placeholder={attack.attackName} label="Name" />
      <TextField placeholder={attack.damage} label="Damage" />
      <TextField placeholder={attack.type} label="Attack name" />
    </Box>
  ));
  const itemList = currentChar.items.map((item) => (
    <Box>
      <TextField placeholder={item.itemName} label="Name" />
      <TextField placeholder={item.quantity} label="Damage" />
      <TextField placeholder={item.itemDescription} label="Attack name" />
    </Box>
  ));
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [level, setLevel] = useState(0);
  const [className, setClassName] = useState('');
  const [background, setBackground] = useState('');
  // char info main data
  const [charInfo, setCharInfo] = useState({
    background,
    className,
    level,
    name,
    race,
  });
  const [armorClass, setArmorClass] = useState(0);
  const [health, setHealth] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [initiative, setInitiative] = useState(0);
  // physical info main field
  const [physicalInfo, setPhysicalInfo] = useState({
    armorClass,
    health,
    speed,
    initiative,
  });
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelliegence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  // stats main field
  const [stats, setStats] = useState({
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  });
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
  // skill mainfield
  const [skills, setSkills] = useState({
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
  });

  useEffect(() => { console.log(name); }, [name]);

  /// //all the onchange functions
  const addName = (event) => {
    setName(event.target.value);
  };
  const addRace = (event) => {
    setRace(event.target.value);
  };
  const addLevel = (event) => {
    setLevel(event.target.value);
  };
  const addClassName = (event) => {
    setClassName(event.target.value);
  };
  const addBackground = (event) => {
    setBackground(event.target.value);
  };
  const addArmorClass = (event) => {
    setArmorClass(event.target.value);
  };
  const addHealth = (event) => {
    setHealth(event.target.value);
  };
  const addSpeed = (event) => {
    setSpeed(event.target.value);
  };
  const addInitiative = (event) => {
    setInitiative(event.target.value);
  };
  const addStrength = (event) => {
    setStrength(event.target.value);
  };
  const addDexterity = (event) => {
    setDexterity(event.target.value);
  };
  const addConstitution = (event) => {
    setConstitution(event.target.value);
  };
  const addIntelligence = (event) => {
    setIntelliegence(event.target.value);
  };
  const addWisdom = (event) => {
    setWisdom(event.target.value);
  };
  const addCharisma = (event) => {
    setCharisma(event.target.value);
  };
  const addAcrobatics = (event) => {
    setAcrobatics(event.target.value);
  };
  const addArcana = (event) => {
    setArcana(event.target.value);
  };
  const addAthletics = (event) => {
    setAthletics(event.target.value);
  };
  const addDeception = (event) => {
    setDeception(event.target.value);
  };
  const addHistory = (event) => {
    setHistory(event.target.value);
  };
  const addInsight = (event) => {
    setInsight(event.target.value);
  };
  const addIntimidation = (event) => {
    setIntimidation(event.target.value);
  };
  const addMedicine = (event) => {
    setMedicine(event.target.value);
  };
  const addNature = (event) => {
    setNature(event.target.value);
  };
  const addPerception = (event) => {
    setPerception(event.target.value);
  };
  const addPersuasion = (event) => {
    setPersuasion(event.target.value);
  };
  const addReligion = (event) => {
    setReligion(event.target.value);
  };
  const addStealth = (event) => {
    setStealth(event.target.value);
  };

  const saveData = async () => {
    const data = {
      charInfo,
      physicalInfo,
      stats,
      skills,
    };
    // trying to get specific board but cant send data through the axios call
    /// ////////////////im stuck here i cant carry on
    // data is all the data that can be edited
    const allCharData = await axios.get('/boards/getOne', boardName);
    console.log(allCharData);
  };
  return (
    <Box>
      <Box>
        <h1>CharInfo</h1>
        <TextField
          placeholder={currentChar.charInfo.name}
          label="Name"
          onChange={addName}
        />
        <TextField placeholder={currentChar.charInfo.race} label="Race" onChange={addRace} />
        <TextField placeholder={currentChar.charInfo.level} label="Level" type="number" onChange={addLevel} />
        <TextField placeholder={currentChar.charInfo.className} label="Class" onChange={addClassName} />
        <TextField placeholder={currentChar.charInfo.background} label="Background" onChange={addBackground} />
      </Box>
      <Box>
        <h1>Physical Info</h1>
        <TextField placeholder={currentChar.physicalInfo.armorClass} label="Armor Class" type="number" onChange={addArmorClass} />
        <TextField placeholder={currentChar.physicalInfo.health} label="Health" type="number" onChange={addHealth} />
        <TextField placeholder={currentChar.physicalInfo.initiative} label="Initiative" type="number" onChange={addInitiative} />
        <TextField placeholder={currentChar.physicalInfo.speed} label="Speed" type="number" onChange={addSpeed} />
      </Box>
      <Box>
        <h1>Stats</h1>
        <TextField placeholder={currentChar.stats.charisma} label="Charisma" type="number" onChange={addCharisma} />
        <TextField placeholder={currentChar.stats.constitution} label="Constitution" type="number" onChange={addConstitution} />
        <TextField placeholder={currentChar.stats.dexterity} label="Dexterity" type="number" onChange={addDexterity} />
        <TextField placeholder={currentChar.stats.intelligence} label="Intelligence" type="number" onChange={addIntelligence} />
        <TextField placeholder={currentChar.stats.strength} label="Strength" type="number" onChange={addStrength} />
        <TextField placeholder={currentChar.stats.wisdom} label="Wisdom" type="number" onChange={addWisdom} />
      </Box>
      <Box>
        <h1>Skills</h1>
        <TextField placeholder={currentChar.skills.acrobatics} label="Acrobatics" type="number" onChange={addAcrobatics} />
        <TextField placeholder={currentChar.skills.arcana} label="Arcana" type="number" onChange={addArcana} />
        <TextField placeholder={currentChar.skills.athletics} label="Athletics" type="number" onChange={addAthletics} />
        <TextField placeholder={currentChar.skills.deception} label="Deception" type="number" onChange={addDeception} />
        <TextField placeholder={currentChar.skills.history} label="History" type="number" onChange={addHistory} />
        <TextField placeholder={currentChar.skills.insight} label="Insight" type="number" onChange={addInsight} />
        <TextField placeholder={currentChar.skills.intimidation} label="Intimidation" type="number" onChange={addIntimidation} />
        <TextField placeholder={currentChar.skills.medicine} label="Medicine" type="number" onChange={addMedicine} />
        <TextField placeholder={currentChar.skills.nature} label="Nature" type="number" onChange={addNature} />
        <TextField placeholder={currentChar.skills.perception} label="Perception" type="number" onChange={addPerception} />
        <TextField placeholder={currentChar.skills.persuasion} label="Persuasion" type="number" onChange={addPersuasion} />
        <TextField placeholder={currentChar.skills.religion} label="Religion" type="number" onChange={addReligion} />
        <TextField placeholder={currentChar.skills.stealth} label="Stealth" type="number" onChange={addStealth} />
      </Box>
      <Button variant="contained" onClick={saveData}>Save data</Button>
    </Box>
  );
}
