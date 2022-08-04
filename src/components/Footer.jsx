import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";

const Footer = ({ quotesActive, userActive ,changeFooter }) => {
  return (
    <div className='Footer'>
      <button onClick={changeFooter} className={`footer-button-user-${userActive}`}>
        <AiOutlineUser />
      </button>
      <button onClick={changeFooter} className={`footer-button-quotes-${quotesActive}`}>
        <AiOutlineBook />
      </button>
    
    
</div >
  )
}

export default Footer