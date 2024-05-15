import React from 'react'

function ProjectPreview({ project }) {
  return (
    <div className='project-preview'>
      <img src={project.img} alt={`${project.name} screenshot`} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.link} target='_blank' rel='noopener noreferrer'>
        View Project
      </a>
      <ul>
        {project.stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectPreview
