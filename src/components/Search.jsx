import React from 'react'
import SearchCategory from './SearchCategory'
import { GiReceiveMoney , GiAbstract013} from "react-icons/gi";

const icon =[<GiReceiveMoney />, <GiAbstract013 />]

const Search = () => {
    return (
        <div className='search'>
            <SearchCategory/>
            <SearchCategory/>
            <SearchCategory/>
            <SearchCategory/>
        </div>
    )
}

export default Search
