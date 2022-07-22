import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignUpForm from './pages/signUpForm.jsx';
import Login from './pages/login.jsx';
import MainPage from './pages/mainPage.jsx';
import CharacterSheet from './components/characterSheet.jsx';
import Taskbar from './components/taskbar.jsx';

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
        console.log('this fucked up');
        return setCurrentPage('signUp');
      }
    };
    loginChecker();
  }, []);
  useEffect(() => {
    console.log(currentPage);
    // check the jwt through the backend
  }, [currentPage]);
  return (
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
    </div>
  );
}
