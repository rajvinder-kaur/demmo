import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <Link to="/"> home </Link>
    <Link to="/list"> job listing </Link>
    <Link to="/Cdashboard"> Dashboard </Link>
    </div>
  )
}

export default Home