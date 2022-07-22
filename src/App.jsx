import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignUpForm from './pages/signUpForm.jsx';
import Login from './pages/login.jsx';
import MainPage from './pages/mainPage.jsx';
import CharacterSheet from './components/characterSheet.jsx';
import Taskbar from './components/taskbar.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('');
  useEffect(async () => {
    let checkIfLogin;
    try {
      checkIfLogin = await axios.get('users/loginCheck');
      if (checkIfLogin) {
        setCurrentPage('mainPage');
      }
    } catch (err) {
      console.log(err);
      setCurrentPage('signUp');
    }
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
