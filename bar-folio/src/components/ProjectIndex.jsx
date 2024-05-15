import React from 'react'
import ProjectList from './ProjectList'

const ProjectIndex = ({ projects }) => {
  return (
    <section className='projectIndex-main-section'>
      <div className='text-wrapper flex column auto-center'>
        <h2>My Recent Work</h2>
        <p>
          Here are a few past design projects I've worked on. Want to see more?
          Email me.
        </p>
      </div>
      <ProjectList projects={projects} />
    </section>
  )
}

export default ProjectIndex
