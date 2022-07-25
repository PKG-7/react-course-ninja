import React from 'react'

export const Navbar = ({info}) => {
  return (
    <nav className='navbar'>
      <h1>{info}</h1>
    <h1>The Dojo Blog</h1>
    <div className="links">
      <a href="/">Home</a>
      <a href="/create">New Blog</a>
    </div>
    </nav>
  )
}
