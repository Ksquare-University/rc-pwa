import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <div>
        <h1>This is the Rappi public page</h1>
        <footer> <Link to="/login">Customer Login</Link></footer>
    </div>
  )
}

export default Public