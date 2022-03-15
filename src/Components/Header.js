import React from 'react'
import './css/Header.css';


export default function Header() {
  return (
    <header>
      <nav className='active' id='nav'>
          <ul>
            <li>Home</li>
            <li>Popular</li>
            <li>Watching</li>
            <li>Account</li>
          </ul>
      </nav>

    <form action="#" id="form">
        <input type="text" id="search" className="search" placeholder="Search"/>
    </form>
</header>
  )
}
