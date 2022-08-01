import React from 'react'
import QuoteSave from './QuoteSave'


const User = ({ arrayLiked }) => {

    return (
        <div className='User'>
            {
                arrayLiked.map((quote) => (
                    <QuoteSave
                        quote={quote}
                    />
                ))
            }
        </div>
    )
}

export default User
