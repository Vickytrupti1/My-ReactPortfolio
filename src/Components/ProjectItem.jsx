import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function ProjectItem({Image,name,direct,id}) {
  let navigate = useNavigate()
  return (
    <div className='projectItem' onClick={()=>{navigate("/project/" + id);}}>
        <div style={{backgroundImage: `url(${Image})`}} className="bgImage">
        </div>
        <h1>{name}</h1>
        
    </div>
  )
}

export default ProjectItem