import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function Skills({ attacks, setAttacks }) {
  const [attackName, setAttackName] = useState('');
  const [damage, setDamage] = useState(0);
  const [type, setType] = useState('');
  const handleName = (event) => {
    const { value } = event.target;
    setAttackName(value);
    console.log(attackName);
  };
  const handleDamage = (event) => {
    const { value } = event.target;
    setDamage(value);
    console.log(value);
  };
  const handleType = (event) => {
    const { value } = event.target;
    setType(value);
    console.log(type);
  };
  const addAttack = () => {
    const attack = {
      attackName,
      damage,
      type,
    };
    // setting the object into the array using use State
    setAttacks((attacks) => [...attacks, attack]);
    // need to render in a lopp for this
    // how to set the data here
  };

  const attackNameList = attacks.map((attack) => (
    <h2>{attack.attackName}</h2>
  ));
  const attackDamageList = attacks.map((attack) => (
    <h2>{attack.damage}</h2>
  ));
  const attackTypeList = attacks.map((attack) => (
    <h2>{attack.type}</h2>
  ));
  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
      }}
      >
        <h2>Attacks</h2>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        >
          {/* save these as states that can be used to extract the values */}
          <TextField
            label="Attack Name"
            name="attackName"
            onChange={handleName}
          />
          <TextField
            label="Damage"
            name="damage"
            onChange={handleDamage}
          />
          <TextField
            label="Type"
            name="type"
            onChange={handleType}
          />
          <Button onClick={addAttack}>
            <AddBoxIcon fontSize="large" />
          </Button>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'start',
        }}
        >
          {/* attacks are being shown but the formatting is really bad */}
          <h4>{attackNameList}</h4>
          <h4>{attackDamageList}</h4>
          <h4>{attackTypeList}</h4>

        </Box>
      </Box>
    </div>
  );
}
