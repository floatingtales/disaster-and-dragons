import React, { useState, useEffect } from 'react';
import SignUpForm from './components/signUpForm.jsx';
import Login from './components/login.jsx';
import MainPage from './components/mainPage.jsx';

export default function App() {
  const [loginorsignup, setLoginorsignup] = useState('signUp');
  useEffect(() => {
    console.log(loginorsignup);
    // check the jwt thorugh the backend
  }, [loginorsignup]);
  return (
    <div>
      {loginorsignup === 'signUp' && (
      <SignUpForm loginorsignup={loginorsignup} setLoginorsignup={setLoginorsignup} />
      )}
      {loginorsignup === 'login' && (
      <Login setLoginorsignup={setLoginorsignup} />
      )}
      {loginorsignup === 'mainPage' && (
      <MainPage />
      )}
    </div>
  );
}
