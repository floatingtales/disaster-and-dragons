import React, { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(null);
  const [item, setItem] = useState([]);
  const [people, setPeople] = useState([]);
  return (
    <div>
      {bill === null && (
        <div>
          <CreateBill setBill={setBill} />
        </div>
      )}
      {bill !== null && (
        <div>
          <Form setItem={setItem} item={item} setPeople={setPeople} people={people} />
        </div>
      )}
      {item.length > 0 && (
        <div>
          <Bill item={item} people={people} />
        </div>
      )}
    </div>
  );
}
