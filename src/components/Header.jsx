import React from 'react'



const Header = ({user}) => {
    return (
        <div className='Header'>
            <img src={user.picture.medium} alt="" />
        </div>
    )
}

export default Header