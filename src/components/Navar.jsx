import React from 'react'
import { Link } from 'react-router-dom'
import "./Navar.css"
const Navar = () => {
  return (
    <div>
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/login">login</Link>
        <Link className='nav' to="/appointments">appointments</Link>
        <Link className='nav' to="/appointment/:appointmentId">appointments Details</Link>
        <Link  className='nav' to="/appointment/add">add</Link>
    </div>
  )
}

export default Navar