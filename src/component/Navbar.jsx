import React from 'react'
import { NavLink } from 'react-router-dom'
import '../component/Navbar.css'
import { Clipboard } from "lucide-react";
const Navbar = () => {
  return (

    <div className='Navbar'>
     <div className='Name-app'>
      <Clipboard size={20} /> 
      PasteX
      
     </div>
    <NavLink
     to= "/"
    >
        Home
    </NavLink>

     <NavLink
      to= "/pastes"
     >
       All Pastes
    </NavLink>
    

    </div>
  )
}

export default Navbar
