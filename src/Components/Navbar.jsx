import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='Nav'>
      <ul className='Navmenu'>
        <li>
          <Link to="/home" className='Navlinks'>Home</Link>
        </li>
        <li>
          <Link to="/skills" className='Navlinks'>Skills</Link>
        </li>
        <li>
          <Link to="/projects" className='Navlinks'>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className='Navlinks'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar