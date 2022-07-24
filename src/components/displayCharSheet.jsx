import React, { useState, useEffect } from 'react';
import {
  Box, Button, InputAdornment, TextField, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';
import EditCharComponent from './editCharComponent.jsx';

export default function DisplayCharSheet({ currentChar, charIndex }) {
  const [editChar, setEditChar] = useState(false);
  const boardName = localStorage.getItem('boardName');
  // need boardName from localstorage
  const editCharacter = () => {
    setEditChar(true);
    // over here on edit render a textfield of all inputs
  };
  return (
    <Box>
      <h1>
        Adventurer information of
        {' '}
        {currentChar.charInfo.name}
        {' '}
      </h1>
      {editChar === false && (
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: 'solid',
        }}
        >
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: 'solid', width: '10vw',
          }}
          >
            <h1>CharInfo </h1>
            <div>
              <h4>{currentChar.charInfo.name}</h4>
              <h4>{currentChar.charInfo.race}</h4>
              <h4>{currentChar.charInfo.className}</h4>
              <h4>{currentChar.charInfo.level}</h4>
              <h4>{currentChar.charInfo.background}</h4>
            </div>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: 'solid', width: '12vw',
          }}
          >
            <h1>Attacks</h1>
            <div>
              <h4>
                {currentChar.attacks.map((attack) => (
                  <div>
                    <h4>{attack.attackName}</h4>
                    <h4>{attack.damage}</h4>
                    <h4>{attack.type}</h4>
                  </div>
                ))}
              </h4>
            </div>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: 'solid', width: '16vw',
          }}
          >
            <h1>Items</h1>
            <div>
              <div>
                {currentChar.items.map((item) => (
                  <div>
                    <h4>{item.itemName}</h4>
                    <h4>{item.quantity}</h4>
                    <h4>{item.itemDescription}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: 'solid', width: '16vw',
          }}
          >
            <h1>Stats</h1>
            <div>
              <h4>
                Charisma:
                {currentChar.stats.charisma}
              </h4>
              <h4>
                Constitution:
                {' '}
                {currentChar.stats.constitution}
              </h4>
              <h4>
                Dexterity:
                {' '}
                {currentChar.stats.dexterity}
              </h4>
              <h4>
                Intelligence:
                {' '}
                {currentChar.stats.intelligence}
              </h4>
              <h4>
                Strength
                {currentChar.stats.strength}
              </h4>
              <h4>
                Wisdom:
                {currentChar.stats.wisdom}
              </h4>
            </div>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'column', border: 'solid', height: '60vh', width: '25vw', flexWrap: 'wrap',
          }}
          >
            <h1>Skills</h1>
            <div>
              <h4>
                Acrobatics:
                {currentChar.skills.acrobatics}
              </h4>
              <h4>
                Arcana:
                {' '}
                {currentChar.skills.arcana}
              </h4>
              <h4>
                Athletics:
                {' '}
                {currentChar.skills.athletics}
              </h4>
              <h4>
                Deception:
                {' '}
                {currentChar.skills.deception}
              </h4>
              <h4>
                History
                {currentChar.skills.history}
              </h4>
              <h4>
                Insight:
                {currentChar.skills.insight}
              </h4>
              <h4>
                Intimidation:
                {currentChar.skills.intimidation}
              </h4>
              <h4>
                Medicine:
                {' '}
                {currentChar.skills.medicine}
              </h4>
              <h4>
                Nature:
                {' '}
                {currentChar.skills.nature}
              </h4>
              <h4>
                Perception:
                {' '}
                {currentChar.skills.perception}
              </h4>
              <h4>
                Persuasion
                {currentChar.skills.persuasion}
              </h4>
              <h4>
                Religion:
                {currentChar.skills.religion}
              </h4>
              <h4>
                Stealth:
                {currentChar.skills.stealth}
              </h4>
            </div>
          </Box>
          <Button onClick={editCharacter}>Edit</Button>
        </Box>
      )}
      {editChar === true && (
        <EditCharComponent currentChar={currentChar} charIndex={charIndex} boardName={boardName} />
      )}

    </Box>
  );
}
