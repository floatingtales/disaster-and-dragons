import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  orange, red, blue, pink,
} from '@mui/material/colors';
import SignUpForm from './pages/signUpForm.jsx';
import Login from './pages/login.jsx';
import MainPage from './pages/mainPage.jsx';
import CharacterSheet from './components/characterSheet.jsx';
import Taskbar from './components/taskbar.jsx';
import GamePage from './pages/gamePage.jsx';
import ChatBox from './components/chatBox.jsx';
import CreateBoard from './components/createBoard.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('');
  useEffect(() => {
    const loginChecker = async () => {
      const token = localStorage.authorisedToken;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let checkIfLogin;
      try {
        checkIfLogin = await axios.get('users/loginCheck', config);
        if (!checkIfLogin) {
          throw new Error('no token');
        }
        return setCurrentPage('mainPage');
      } catch (err) {
        console.log(err);
        console.log('this screwed up');
        return setCurrentPage('signUp');
      }
    };
    loginChecker();
  }, []);
  useEffect(() => {
    console.log(currentPage);
    // check the jwt through the backend
  }, [currentPage]);
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {' '}
      <div>
        <Taskbar setCurrentPage={setCurrentPage} />
        {currentPage === 'signUp' && (
        <SignUpForm setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'login' && (
        <Login setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'mainPage' && (
        <MainPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'charSheet' && (
        <CharacterSheet setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'game' && (
        <GamePage />
        )}
        {currentPage === 'chat' && (
        <ChatBox />
        )}
        {currentPage === 'createBoard' && (
        <CreateBoard setCurrentPage={setCurrentPage} />
        )}
      </div>

    </ThemeProvider>

  );
}
