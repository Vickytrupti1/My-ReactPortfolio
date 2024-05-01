import React from 'react'
import { Link } from 'react-router-dom';
// import img from '../images/IMG_4661 (1).jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "../styles/Home.css"

function Home() {

  const email = 'vickysahoo702@gmail.com';

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, i am <br />Truptiranjan,</h2>
        <div className='prompt'>
          <p>A MernStack developer with a passion for learning and creating.</p>
          <Link to={`https://www.linkedin.com/in/truptiranjan-sahoo-656075213`}>
            <FaLinkedin />
            </Link>
          {/* <Link><BiLogoGmail /></Link> */}
          <Link to={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <BiLogoGmail />
          </Link>
          <Link to={`https://github.com/Vickytrupti1`}><FaGithub /></Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React js, HTML, Css, Bootstrap, Tailwind, NPM, Yarn, MaterialUI</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpessJS, MangoDB,Basic knowledge of MySQL</span>
          </li>
          <li className='item'>
            <h2>Language</h2>
            <span>A Strong knowledge in JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home