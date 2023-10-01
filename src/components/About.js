import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>About Page</h1>
      <button onClick={() => navigate("/")} className='btn btn-success'>Go to Home Page</button>
    </div>
  )
}

export default About