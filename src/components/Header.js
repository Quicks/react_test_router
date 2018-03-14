import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/test'>Test</Link></li>
        <li><Link to='/caffee/100'>Caffee</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
