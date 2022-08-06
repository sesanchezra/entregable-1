import React from 'react'

const Detail = ({tittle, description}) => {
    return (
        <div className='detail'>
            <p>{tittle}:</p>
            <p>{description}</p>
        </div>
    )
}

export default Detail
