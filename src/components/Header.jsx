import React from 'react'
import { FiSearch } from "react-icons/fi";



const Header = ({ user, changeFooter ,handleSearch}) => {
    return (
        <div className='Header'>
            <div className='header-button'>
                <button className='header-button-search' onClick={handleSearch}>
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