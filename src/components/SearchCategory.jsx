import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi'


const SearchCategory = ({icon}) => {
    return (
        <div className='search-category'>
            <button className='button-icon' style={{color: `${icon?.color}`}}>
                {icon?.icon}
                <h4 className='button-tittle' style={{color: '#808080'}}>{icon?.tittle}</h4>
            </button>
        </div>
    )
}

export default SearchCategory
