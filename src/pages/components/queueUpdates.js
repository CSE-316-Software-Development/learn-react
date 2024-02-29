import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => { // Called "Batching updates" in React
        setNumber(n => n + 1); // setNumber(1)
        setNumber(n => n + 1); // setNumber(2)
        setNumber(n => n + 1); // setNumber(3)
      }}>+3</button>
    </>
  )
}
