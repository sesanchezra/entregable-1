import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";

const Footer = ({ footerChange,changeFooter }) => {
  return (
    <div className='Footer'>
      <button onClick={changeFooter} className={`footer-button-user-${footerChange}`}>
        <AiOutlineUser />
              </button>
      <button onClick={changeFooter} className={`footer-button-quotes-${footerChange}`}>
        <AiOutlineBook />
      </button>
    
    
</div >
  )
}

export default Footer