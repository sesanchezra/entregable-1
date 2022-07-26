import React from 'react'
import { ImQuotesRight } from "react-icons/im";


const QuotesBox = ({quote}) => {
    return (
        <div className="quotes-box">
            <div className="quotes-content">
            <ImQuotesRight />
            <h3>{quote?.quote}</h3>
            <h6>{quote?.author}</h6>
        </div>
        </div>
    )
}

export default QuotesBox
