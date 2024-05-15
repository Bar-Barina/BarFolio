import React from 'react'
import ProjectList from './ProjectList'

const ProjectIndex = ({ projects }) => {
  return (
    <section className='projectIndex-main-section'>
      <ProjectList projects={projects} />
    </section>
  )
}

export default ProjectIndex
