import React from 'react'
import ProjectPreview from './ProjectPreview'

function ProjectList({ projects }) {
  return (
    <section className='projectList-main-section flex'>
      {projects.map((project, index) => (
        <ProjectPreview key={index} project={project} />
      ))}
    </section>
  )
}

export default ProjectList
