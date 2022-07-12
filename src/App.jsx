import React, { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(null);
  const [item, setItem] = useState([]);
  const [people, setPeople] = useState([]);
  return (
    <div>
      <h1> Hellos</h1>
    </div>
  );
}