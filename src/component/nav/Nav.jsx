import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {VscPreview} from 'react-icons/vsc'
import {MdOutlineMail} from 'react-icons/md'

const Nav = () => {
  const [activenav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')}className={activenav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activenav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activenav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activenav === '#portfolio' ? 'active' : ''}><VscPreview/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activenav === '#contact' ? 'active' : ''}><MdOutlineMail/></a>
    </nav>
  )
}

export default Nav