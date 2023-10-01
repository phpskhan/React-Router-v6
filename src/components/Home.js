import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about")} className='btn btn-primary'>Go to About Page</button>
    </div>
  )
}

export default Home