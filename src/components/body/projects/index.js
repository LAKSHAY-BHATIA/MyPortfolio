import React from 'react'
import Seperator from '../../common/seperator';
import { ProjectData } from '../../data/Projects'
import Projectcard from './Projectcard.js';
import "./projects.css"
function Projects () {
    const data = ProjectData;
  return (
    <div className = "projects">
        <Seperator/>
       <label className='section-title'>Projects</label>
       <div>
{data.map(project=>{
    return(
        <Projectcard project={project}/>
    )
})}
       </div>
          </div>
  )
}

export default Projects 