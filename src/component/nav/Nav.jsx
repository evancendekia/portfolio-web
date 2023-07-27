import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  const [activenav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')}className={activenav == '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activenav == '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activenav == '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activenav == '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activenav == '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav