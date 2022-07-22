import React, { useState, useEffect } from 'react';
import SignUpForm from './pages/signUpForm.jsx';
import Login from './pages/login.jsx';
import MainPage from './pages/tasklist.jsx';
import CharacterSheet from './components/characterSheet.jsx';
import Taskbar from './components/taskbar.jsx';

export default function App() {
  const [loginorsignup, setLoginorsignup] = useState('signUp');
  useEffect(() => {
    console.log(loginorsignup);
    // check the jwt through the backend
  }, [loginorsignup]);
  return (
    <div>
      <Taskbar setLoginorsignup={setLoginorsignup} />
      {loginorsignup === 'signUp' && (
      <SignUpForm loginorsignup={loginorsignup} setLoginorsignup={setLoginorsignup} />
      )}
      {loginorsignup === 'login' && (
      <Login setLoginorsignup={setLoginorsignup} />
      )}
      {loginorsignup === 'mainPage' && (
      <MainPage setLoginorsignup={setLoginorsignup} />
      )}
      {loginorsignup === 'charSheet' && (
      <CharacterSheet setLoginorsignup={setLoginorsignup} />
      )}
    </div>
  );
}
