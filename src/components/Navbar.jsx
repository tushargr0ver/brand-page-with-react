import React from 'react'
import logo from '../assets/brand_logo.png'

export default function Navbar() {
  return (
    <nav>
        <img className='logo' src={logo} alt="" />
        <ul>
            <li><a className='links' href="#">MENU</a></li>
            <li><a className='links' href="#">LOCATION</a></li>
            <li><a className='links' href="#">ABOUT</a></li>
            <li><a className='links' href="#">CONTACT</a></li>
        </ul>
        <a href="#"><button className='login' type='submit'>Login</button></a>
    </nav>
  )
}
