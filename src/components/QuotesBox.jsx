import React, { useState } from 'react'
import { ImQuotesRight } from "react-icons/im";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import quotes from '../json/quotes.json'


const QuotesBox = ({ setLiked }) => {

    // Quotes json - random

    const randomIndexQuote = (quotes) => {
        return Math.floor(Math.random() * quotes.length)
    }
    const [randomQuote, setRandomQuote] = useState(quotes[randomIndexQuote(quotes)])


    const [clickLike, setClickLike] = useState(false)

    const onLike = () => {
        setLiked(randomQuote)
        setClickLike(!clickLike)
    }

    console.log(clickLike)

    return (
        <div className="quotes-box">
            <div className="quotes-content">
                <ImQuotesRight className='icon-quotes' />
                <h3>{randomQuote?.quote}</h3>
                <div className='author-button'>
                    <h6>{randomQuote?.author}</h6>
                    <button onClick={onLike} className='button-quotes-like'>
                        {
                            clickLike ?
                                <AiFillHeart className='unliked'/>
                                :
                                <AiOutlineHeart className='liked'/>
                        }
                    </button>


                </div>

            </div>
        </div>
    )
}

export default QuotesBox
