import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi'


const SearchCategory = ({prueba}) => {
    return (
        <div className='search-category'>
            <button>
                <GiReceiveMoney className='icon' />
                <h4>Abundance</h4>
            </button>
        </div>
    )
}

export default SearchCategory
