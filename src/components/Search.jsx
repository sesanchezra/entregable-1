import React from 'react'
import SearchCategory from './SearchCategory'
import { GiReceiveMoney, GiMeditation ,GiInspiration } from "react-icons/gi";
import { AiFillBook } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";



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

const Search = () => {
    return (
        <div className='search'>
            <h2>Categories</h2>
            <div className='search-box'>
                
                {
                    icon.map(icon => (
                        <SearchCategory
                            icon={icon}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Search
