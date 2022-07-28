import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div className='not-found'>
        <h2>Sorry bro</h2>
        <p>That page never existed</p>
        <Link to="/">Back to home page...</Link>
    </div>
  )
}
