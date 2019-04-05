import React, { useState } from 'react'
import './quote.css';
import { quotes } from './utils/seed'

export default function Quote() {
  let [random, setRandom] = useState(0)

  const handleChange = () => {
    let number = Math.floor(Math.random() * quotes.length)
    setRandom(number);
  }
  return (
    <div className="row">
      <div className="quote-container">
        <div className="quote-container_box">
          <p>{quotes[random]}</p>
        </div>
        <button onClick={handleChange} className="btn btn-link quote-container_button">
          Change
        </button>
      </div>
    </div>
  )
}
