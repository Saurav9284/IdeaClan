import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/signup/step-1')}>Signup</button>
    </div>
  )
}

export default Home
