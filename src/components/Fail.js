import React from 'react'
import { useNavigate } from 'react-router-dom'

const Fail = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/login")
    }
    
  return (
    <div>
        <h1>Failed to Login</h1>
        <button onClick={goBack}>Back to Log In</button>
    </div>
  )
}

export default Fail