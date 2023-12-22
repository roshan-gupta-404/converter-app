import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-black text-white flex justify-around p-2 '>
    <NavLink className={({isActive})=>`p-3 border border-1 rounded-lg hover:bg-gray-500 ${isActive?'bg-gray-500':'' }`} to="">Currency</NavLink>
    <NavLink className={({isActive})=>`p-3 border border-1 rounded-lg hover:bg-gray-500 ${isActive?'bg-gray-500':'' }`} to="length">Length</NavLink>
    <NavLink className={({isActive})=>`p-3 border border-1 rounded-lg hover:bg-gray-500 ${isActive?'bg-gray-500':'' }`} to="mass">Mass</NavLink>
    
    </div>
  )
}

export default Header