import React, { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    setCounter(prev => prev + 1)
  }

  const handleSubstract = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <div>
      <h1>This is Counter App</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: "10px" }}>
        <button onClick={handleAdd}>+</button>
        <b>{counter}</b>
        <button onClick={handleSubstract}>-</button>
      </div>
    </div>
  )
}
