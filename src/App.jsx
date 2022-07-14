import React, { useState } from 'react';
import SignUpForm from './components/signUpForm.jsx';
import Login from './components/login.jsx';

export default function App() {
  return (
    <div>
      <SignUpForm />
      <Login />
    </div>
  );
}
