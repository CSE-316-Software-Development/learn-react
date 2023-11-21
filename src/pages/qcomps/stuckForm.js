import { useState } from 'react';

export default function Form() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  function handleFirstNameChange(e) {
    setFName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLName(e.target.value);
  }

  function handleReset() {
    setFName('');
    setLName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={fName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {fName} {lName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
