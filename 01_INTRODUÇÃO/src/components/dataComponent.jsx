import React from 'react'
import { useState } from 'react'

export default function dataComponent() {
    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
        <p>
        Valor: {someData}
        </p>
        <button onClick={() => (someData = 15)}>Mudar váriavel</button>

        <p> Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar com useState </button>
    </div>
  )
}
