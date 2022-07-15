import React, { useState, useEffect } from 'react';
import SignUpForm from './components/signUpForm.jsx';
import Login from './components/login.jsx';

export default function App() {
  const [loginorsignup, setLoginorsignup] = useState(false);
  useEffect(() => {
    console.log(loginorsignup);
  }, [loginorsignup]);
  const props = { loginorsignup, setLoginorsignup };
  return (
    <div>
      {loginorsignup === false && (
      <SignUpForm loginorsignup={loginorsignup} setLoginorsignup={setLoginorsignup} />
      )}
      {loginorsignup === true && (
      <Login props={props} />
      )}
    </div>
  );
}
