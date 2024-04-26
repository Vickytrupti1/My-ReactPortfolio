import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectLists';
import { FaGithub } from "react-icons/fa";
import "../styles/ProjectDisplay.css"
import { Link } from 'react-router-dom';

function ProjectDisplay() {
    const {id} =useParams();
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.Image}/>
        <p>
            Skills:<b>{project.skills}</b>
        </p>
        <a className='showProject' href={project.Direct}>Show Project</a>

        <Link to={`https://github.com/Vickytrupti1`}><FaGithub style={{color:"#49a29c"}}/></Link>
        
        
    </div>
  )
}

export default ProjectDisplay