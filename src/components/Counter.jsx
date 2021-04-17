import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(prevState => prevState + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleIncrement}>Increment</button>
    </div>
  )
}