import React, { useState } from 'react'
import QuotesBox from '../components/QuotesBox'
import quotes from '../json/quotes.json'

const Quotes = () => {

  // Quotes json - random

  const randomIndexQuote = (quotes) => {
    return Math.floor(Math.random() * quotes.length)
  }


  const [randomQuote, setRandomQuote] = useState(quotes[randomIndexQuote(quotes)]) 

  
  return (
    <div className='Quotes'>
      <QuotesBox
        quote={randomQuote}
      />
    </div>
  )
}

export default Quotes