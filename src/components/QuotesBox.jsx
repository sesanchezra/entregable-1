import React, { useState } from 'react'
import { ImQuotesRight } from "react-icons/im";
import { AiOutlineHeart , AiFillHeart} from "react-icons/ai";


const QuotesBox = ({ quote , setLiked }) => {

    const [clickLike, setClickLike] = useState(false)

    const onLike = () => {
        setLiked(quote)
        setClickLike(!clickLike)
    }

    console.log(clickLike)

    return (
        <div className="quotes-box">
            <div className="quotes-content">
                <ImQuotesRight className='icon-quotes' />
                <h3>{quote?.quote}</h3>
                <div className='author-button'>
                    <h6>{quote?.author}</h6>
                    <button onClick={onLike}>
                        {
                            clickLike ?
                                <AiFillHeart />
                            :
                                <AiOutlineHeart />
                        }
                        
                        
                    </button>
                    

                </div>
                
            </div>
        </div>
    )
}

export default QuotesBox
