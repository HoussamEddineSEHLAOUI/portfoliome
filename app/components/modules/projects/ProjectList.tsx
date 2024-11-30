import React from 'react'
import ProjectCared from './ProjectCared';
import mainProjects from '../../Data';



const ProjectList = () => {
  return (
    <div className='md:pl-48 md:pr-48 pl-2 pr-2'>
        <div className='flex align-middle md:justify-start flex-wrap '>
            {mainProjects.map((project) => (
                <ProjectCared 
                key={project.id} 
                name={project.name}
                discription={project.discription}
                technologies={project.technologies}
                />
            ))}
        </div>
    </div>
  )
}

export default ProjectList;
