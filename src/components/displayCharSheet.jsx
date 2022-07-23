import React, { useState, useEffect } from 'react';
import {
  Box, Button, InputAdornment, TextField, Typography, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions,
} from '@mui/material';
import axios from 'axios';

export default function DisplayCharSheet({ currentChar, setCurrentChar }) {
  console.log(currentChar);
  return (
    <div>
      <h1>This is the character sheet of THAT character</h1>
      <h1>Attacks</h1>
      <h4>
        {currentChar.attacks.map((attack) => (
          <div>
            <h4>{attack.attackName}</h4>
            <h4>{attack.damage}</h4>
            <h4>{attack.type}</h4>
          </div>
        ))}
      </h4>

      <h1>Items</h1>
      <h4>
        {currentChar.items.map((item) => (
          <div>
            <h4>{item.itemName}</h4>
            <h4>{item.quantity}</h4>
            <h4>{item.itemDescription}</h4>
          </div>
        ))}
      </h4>

      <h1>charInfo</h1>
      <h4>{currentChar.charInfo.name}</h4>
      <h4>{currentChar.charInfo.race}</h4>
      <h4>{currentChar.charInfo.className}</h4>
      <h4>{currentChar.charInfo.level}</h4>
      <h4>{currentChar.charInfo.background}</h4>

      <h1>PhysicalInfo</h1>
      <h4>
        Armor class
        {currentChar.physicalInfo.armorClass}
      </h4>
      <h4>
        Health
        {currentChar.physicalInfo.health}
      </h4>
      <h4>
        Initiative
        {currentChar.physicalInfo.initiative}
      </h4>
      <h4>
        Speed
        {currentChar.physicalInfo.speed}
      </h4>

      <h1>Stats</h1>
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

      <h1>Skills</h1>
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
  );
}
