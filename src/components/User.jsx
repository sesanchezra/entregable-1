import React from 'react'
import QuoteSave from './QuoteSave'


const User = ({ arrayLiked, user }) => {

    return (
        <div className='User'>
            <div className='user-information'>
                <div className='user-information-header'>
                    <img src={user?.picture.large} alt="user-img" />
                    <h3>Hello 👋 , {user?.name.first}</h3>
                </div>
                <h4>Mail: {user?.email}</h4>
                <h4>Username: {user?.login.username}</h4>
            </div>
            <div className='user-quotes'>
                <h2>Quotes liked:</h2>
                {
                    arrayLiked.filter(quote => quote?.quote !== undefined).map((quote) => (
                        <QuoteSave
                            quote={quote}
                        />
                    ))
                }
            </div>
            

        </div>
    )
}

export default User
