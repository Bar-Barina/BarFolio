import React from 'react'

const Skills = () => {
  return (
    <section className='skills-wrapper flex auto-center'>
      <span className='flex auto-center'>Tech Stack</span>
      <div className='skills-icons'>
        <div className='skill-group'>
          <img
            src='https://skillicons.dev/icons?i=html,css,js'
            className='first-row-img'
          />
        </div>
        <div className='skill-group'>
          <img
            src='https://skillicons.dev/icons?i=vue,react'
            className='first-row-img'
          />
        </div>
        <div className='skill-group'>
          <img
            src='https://skillicons.dev/icons?i=next,vite,sass'
            className='first-row-img'
          />
        </div>
        <div className='skill-group'>
          <img
            src='https://skillicons.dev/icons?i=nodejs,mongodb'
            className='second-row-img'
          />
        </div>
        <div className='skill-group'>
          <img
            src='https://skillicons.dev/icons?i=git,github'
            className='second-row-img'
          />
        </div>
        <div className='skill-group'>
          <img
            src='https://skillicons.dev/icons?i=npm,jest,wordpress'
            className='second-row-img'
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
