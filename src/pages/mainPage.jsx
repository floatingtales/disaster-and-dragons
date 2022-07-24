import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import axios from 'axios';

export default function mainPage({ setCurrentPage }) {
  const [allBoardData, setallBoardData] = useState([]);
  const createBoard = () => {
    // create a board creation form??
    // just create a board that enables the user to input name of the board
    setCurrentPage('createBoard');
  };
  // axios call to get all the data
  const boardData = async () => {
    // get axios data
    const token = localStorage.authorisedToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const data = await axios.get('/boards/getAll', {}, config);
    // put it in a list
    setallBoardData(data.data);
  };
  boardData();
  const clickBoard = (event) => {
    const { value } = event.target;
    localStorage.setItem('boardName', `${value}`);
    setCurrentPage('game');
  };
  const boardList = allBoardData.map((board) => (
    <div>
      <Button onClick={clickBoard} value={board.boardName}>{board.boardName}</Button>
    </div>
  ));
  return (
    <div className="avoidTaskbar">
      <Box>
        <Button variant="contained" onClick={createBoard}>Click here to create Board</Button>
        {boardList}
      </Box>

    </div>
  );
}
