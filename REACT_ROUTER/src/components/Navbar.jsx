import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        { /* <Link to="/">Home</Link>
        <Link to="/contacts">Contatos</Link> */}

        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/contacts" className={({isActive}) => (isActive ? "active" : "")}>Contact</NavLink>
    </div>
  )
}

export default Navbar