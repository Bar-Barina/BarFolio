import React from 'react'
import { getSvg } from '../services/svg.service'

function ProjectPreview({ project }) {
  return (
    <div className='project-preview flex column auto-center '>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className='stack-wrapper flex auto-center'>
        {project.stack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <a href={project.link} target='_blank' rel='noopener noreferrer'>
        <span
          dangerouslySetInnerHTML={{
            __html: getSvg('link'),
          }}
        ></span>
        <span>{project.shortLink}</span>
      </a>
    </div>
  )
}

export default ProjectPreview
