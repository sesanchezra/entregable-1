import React from 'react'
import SearchCategory from './SearchCategory'
import { GiReceiveMoney, GiMeditation } from "react-icons/gi";
import { AiFillBook } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";

const icon = [
    {
        icon: <GiReceiveMoney />,
        tittle: 'Abundance'
    },
    {
        icon: <GiMeditation />,
        tittle: 'Spirituality'
    },
    {
        icon: <AiFillBook />,
        tittle: 'Learn'
    },
    {
        icon: <IoIosRocket />,
        tittle: 'Inspire'
    },
    
    
]

const Search = () => {
    return (
        <div className='search'>
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
