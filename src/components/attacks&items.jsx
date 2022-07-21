import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function AttacksAndItems({
  attacks, setAttacks, items, setItems,
}) {
  const [attackName, setAttackName] = useState('');
  const [damage, setDamage] = useState(0);
  const [type, setType] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [itemDescription, setItemDescription] = useState('');

  const handleName = (event) => {
    const { value } = event.target;
    setAttackName(value);
  };
  const handleDamage = (event) => {
    const { value } = event.target;
    setDamage(value);
  };
  const handleType = (event) => {
    const { value } = event.target;
    setType(value);
  };
  const handleItemName = (event) => {
    const { value } = event.target;
    setItemName(value);
  };
  const handleQuantity = (event) => {
    const { value } = event.target;
    setQuantity(value);
  };
  const handleItemDescription = (event) => {
    const { value } = event.target;
    setItemDescription(value);
  };

  const addAttack = () => {
    const attack = {
      attackName,
      damage,
      type,
    };
    // setting the object into the array using useState
    setAttacks((attacks) => [...attacks, attack]);
    // need to render in a lopp for this
    // how to set the data here
  };
  const addItem = () => {
    const item = {
      itemName,
      quantity,
      itemDescription,
    };
    setItems((items) => [...items, item]);
  };
  const attackList = attacks.map((attack, index) => (
    <div>
      <div>{attack.attackName}</div>
      <div>{attack.damage}</div>
      <div>{attack.type}</div>
      <Button value={index}>Delete Attack</Button>
    </div>
  ));

  /// ////////to delete attack
  // const deleteAttack = (event) => {
  //   const { value } = event.target;
  //   console.log(attacks[value]);
  //   const newArray = attacks;
  //   newArray.splice(value, 1);
  //   setAttacks(newArray);
  // };
  // const attackList = [];
  // useEffect(() => {
  //   const attackList = attacks.map((attack, index) => (
  //     <div>
  //       <div>{attack.attackName}</div>
  //       <div>{attack.damage}</div>
  //       <div>{attack.type}</div>
  //       <Button value={index} onClick={deleteAttack}>Delete Attack</Button>
  //     </div>
  //   ));
  // }, [attacks]);
  const itemList = items.map((item, index) => (
    <Box>
      <div>{item.itemName}</div>
      <div>{item.quantity}</div>
      <div>{item.itemDescription}</div>
    </Box>
  ));

  return (
    <div>
      <Box sx={{
        display: 'flex',
        border: 'solid',
      }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
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
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              {attackList}
            </Box>

          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
        }}
        >
          <h2>Items</h2>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
          >
            {/* save these as states that can be used to extract the values */}
            <TextField
              label="Item Name"
              name="itemName"
              onChange={handleItemName}
            />
            <TextField
              label="Quantity"
              name="quantity"
              onChange={handleQuantity}
            />
            <TextField
              label="Description"
              name="description"
              onChange={handleItemDescription}
            />
            <Button onClick={addItem}>
              <AddBoxIcon fontSize="large" />
            </Button>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'start',
          }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              {itemList}
            </Box>

          </Box>
        </Box>
      </Box>

    </div>
  );
}
