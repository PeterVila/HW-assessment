import React, { useState } from 'react';

export default function Home(props) {
  const [counter, addCounter] = useState(0);
  const increment = () => {
    addCounter(counter + 1);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Add</button>
    </>
  );
}
