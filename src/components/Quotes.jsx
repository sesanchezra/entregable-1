import React, { useState } from 'react'
import QuotesBox from '../components/QuotesBox'
import quotes from '../json/quotes.json'

const colors = [
  '(178, 200, 223)',
  '(175, 122, 179)',
  '(244,204,209)',
  '(245,220,249)',
  '(246, 198, 234)',
  '(148, 180, 159)',
  '(255, 222, 180)'

]

const Quotes = ({setLiked}) => {

  // Quotes json - random

  const randomIndexQuote = (quotes) => {
    return Math.floor(Math.random() * quotes.length)
  }
  const [randomQuote, setRandomQuote] = useState(quotes[randomIndexQuote(quotes)]) 

  
  //Color random 

  const colorRandom =(colors)=> {
    return Math.floor(Math.random() * colors.length)
  }

  const [color, setColor] = useState(colors[colorRandom(colors)])

  console.log(color);

  return (
    <div className='Quotes' style={{background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='300' height='300' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(218)'%3E%3Crect width='100%25' height='100%25' fill='rgba${color}'/%3E%3Cpath d='M0 30a 0 0 0 0 0 0 0a 20-20 0 0 1 20-20a 0 0 0 0 0 0 0a 20-20 0 0 1 20-20v20a 0 0 0 0 0 0 0a-20 20 0 0 1-20 20a 0 0 0 0 0 0 0a-20 20 0 0 1-20 20zM0-10a 0 0 0 0 0 0 0h20a-20 20 0 0 1-20 20zM0-10a 20 20 0 0 1 20 20a 0 0 0 0 0 0 0a 20 20 0 0 1 20 20a 0 0 0 0 0 0 0a 20 20 0 0 1 20 20a 0 0 0 0 1 0 0v20a-20-20 0 0 1-20-20a 0 0 0 0 0 0 0a-20-20 0 0 1-20-20a 0 0 0 0 0 0 0a-20-20 0 0 1-20-20a 0 0 0 0 0 0 0a-20-20 0 0 1-20-20a 0 0 0 0 1 0 0a-20-20 0 0 0-20-20h20a 0 0 0 0 1 0 0a 0 0 0 0 0 0 0zM40-10a 20 20 0 0 1 20 20h-20a 0 0 0 0 1 0 0a-20-20 0 0 1-20-20a 0 0 0 0 1 0 0a-20-20 0 0 1-20-20z' fill='rgba${color}'/%3E%3Cpath d='M-20 39.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5zM-20-0.5a 9.5-9.5 0 0 0 9.5-9.5h1a-10.5 10.5 0 0 1-10.5 10.5zM-20-0.5a 10.5 10.5 0 0 1 10.5 10.5a 9.5 9.5 0 0 0 9.5 9.5a 10.5 10.5 0 0 1 10.5 10.5a 9.5 9.5 0 0 0 9.5 9.5a 10.5 10.5 0 0 1 10.5 10.5a 9.5 9.5 0 0 1 9.5 9.5v1a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 0-9.5-9.5a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 0-9.5-9.5a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 0-9.5-9.5a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 1-9.5-9.5a-10.5-10.5 0 0 0-10.5-10.5h1a 9.5 9.5 0 0 1 9.5 9.5a 9.5 9.5 0 0 0 9.5 9.5zM20-0.5a 10.5 10.5 0 0 1 10.5 10.5a 9.5 9.5 0 0 0 9.5 9.5a 10.5 10.5 0 0 1 10.5 10.5h-1a-9.5-9.5 0 0 0-9.5-9.5a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 0-9.5-9.5a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 1-9.5-9.5a-10.5-10.5 0 0 1-10.5-10.5zM20 39.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' fill='rgba(247, 250, 252,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`}}>
      <QuotesBox
        quote={randomQuote}
        setLiked={setLiked}
      />
    </div>
  )
}

export default Quotes