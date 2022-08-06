import React from 'react'
import Detail from './Detail'
import QuoteSave from './QuoteSave'



const User = ({ arrayLiked, user }) => {

    const details = [
        { tittle: 'Username', description: user?.login.username },
        { tittle: 'Email', description: user?.email },
        { tittle: 'Phone', description: user?.phone },
        { tittle: 'Date of birth', description: `${user?.location.street.numer} ${user?.location.street.name}` }
    ]
    // User design - https://dribbble.com/shots/14320835-Booking-App-The-concept-with-booking-feature-for-LookTone/attachments/5980821?mode=media

    return (
        <div className='User'>
            <div className='user-information'>
                <div className='user-information-header'>
                    <img src={user?.picture.large} alt="user-img" />
                    <h3>{`${user?.name.first} ${user?.name.last}`} </h3>
                    <h4>{`${user?.location.city}, ${user?.location.country}`}</h4>
                </div>
                <div className='user-account-details'>
                    {
                        details.map(detail => (
                            <Detail
                                tittle={detail.tittle}
                                description={detail.description}
                                key={detail.tittle}
                            />
                        ))
                    }
                </div>
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
