import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import "../styles/navbar.css"
import { RiMenu5Fill } from "react-icons/ri";
// import { useState } from 'react';

function Navbar() {
    let [expandNavbar,setExpandNavbar]=useState(false)

    let location = useLocation();
    useEffect(()=>{
        setExpandNavbar(false)
    },[location])   
  return (
    <div className='navbar' id={expandNavbar ?'open':'close'}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}>
                <RiMenu5Fill />
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Project</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar