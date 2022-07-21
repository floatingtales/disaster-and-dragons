import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function CharInfo() {
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
        />
      </Box>
    </div>
  );
}
