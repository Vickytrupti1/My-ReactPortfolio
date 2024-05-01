import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link to={`https://www.instagram.com/__.one.n_only.me.__`}><FaInstagram /></Link>
            <Link to={`https://twitter.com/Truptiranj88333`}>
              <FaTwitter />
            </Link>
            
            <Link to={`https://www.facebook.com/vicky.sahoo.1004?mibextid=ZbWKwL`}><FaFacebook /></Link>
            <Link to={`https://www.linkedin.com/in/truptiranjan-sahoo-656075213`}>
            <FaLinkedin />
            </Link>
        </div>
        <p className='copyright'>@copy :2024 Truptiranjan</p>
    </div>
  )
}

export default Footer