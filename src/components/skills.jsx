import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Skills({ setSkills }) {
  const handleAddSkill = () => [
    console.log('jesus'),
    setSkills({}),
  ];
  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Button variant="contained" onClick={handleAddSkill}>Add Skill</Button>
        <Button variant="contained">Add Item</Button>
      </Box>

    </div>
  );
}
