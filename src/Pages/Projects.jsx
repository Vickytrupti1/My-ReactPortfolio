import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import { ProjectList } from '../helpers/ProjectLists'
import "../styles/Projects.css"

function Projects() {
  console.log("Image",ProjectList.Image)
  return (
    <div className='projects'>
      <h1>My Personal Project</h1>
      <div className='projectList'>

        {ProjectList.map((Project,idx)=>{
          return (
          <ProjectItem key={idx} id={idx} name={Project.name} Image={Project.Image} direct={Project.Direct}/>
          );
        })}

      </div>
    </div>
  );
}

export default Projects