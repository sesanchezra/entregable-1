import React from 'react'
import {AiOutlineUser}  from "react-icons/ai";
import {AiOutlineBook}  from "react-icons/ai";

const Footer = () => {
  return (
    <div className='Footer'>
      <button className='footer-button-user'>
        <AiOutlineUser />
      </button>
      <button className='footer-button-quotes'>
        <AiOutlineBook />
      </button>
    
    
</div>
  )
}

export default Footer