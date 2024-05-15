import React from 'react'
import ProjectPreview from './ProjectPreview'

function ProjectList({ projects }) {
  return (
    <div className='project-list'>
      {projects.map((project, index) => (
        <ProjectPreview key={index} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
