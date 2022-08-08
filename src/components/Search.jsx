import React from 'react'
import SearchCategory from './SearchCategory'
import { GiReceiveMoney, GiMeditation, GiInspiration } from "react-icons/gi";
import { AiFillBook } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";




const icon = [
    {
        icon: <GiReceiveMoney />,
        tittle: 'Abundance',
        color: '#fcc2c2'
    },
    {
        icon: <GiMeditation />,
        tittle: 'Spirituality',
        color: '#54ddea'
    },
    {
        icon: <AiFillBook />,
        tittle: 'Learn',
        color: '#a77eff'
    },
    {
        icon: <IoIosRocket />,
        tittle: 'Growth',
        color: '#81b6ff'
    },
    {
        icon: <GiInspiration />,
        tittle: 'Inspire',
        color: '#efb204'
    },


]

const Search = ({ handleSearch , showQuotesSearch}) => {
    return (
        <div className='search'>

            <button onClick={handleSearch} className='close-search'>
                <IoCloseCircleOutline />
            </button>

            <h2>Categories</h2>
            <div className='search-box'>

                {
                    icon.map(icon => (
                        <SearchCategory
                            icon={icon}
                            showQuotesSearch={showQuotesSearch}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Search
