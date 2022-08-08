import React from 'react'
import { FiSearch } from "react-icons/fi";



const Header = ({ user, changeFooter ,activeSearch}) => {
    return (
        <div className='Header'>
            <div className='header-button'>
                <button className='header-button-search' onClick={activeSearch}>
                    <FiSearch />
                </button>
                <button className='header-button-img' onClick={changeFooter}>
                    <img src={user?.picture.medium} alt="" />
                </button>
            </div>


        </div>
    )
}

export default Header