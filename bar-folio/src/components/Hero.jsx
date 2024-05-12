import React from 'react'

const Hero = () => {
  return (
    <section className='hero-main-section'>
      <h3>Front-End React JS / Native Developer</h3>
      <p>I code beautifully simple things, and I love what I do.</p>
      <img src='https://mattfarley.ca/img/mf-avatar.svg' alt='avatar' />
      <img
        src='https://mattfarley.ca/img/hero-devices.svg'
        alt='avatar'
        className='devices'
      />
      <div className='purple-div flex column'>
        <h3>Hi, I’m Bar. Nice to meet you.</h3>
        <p>
          A Front-End developer at day, and a professional wrestler at night who
          highly skilled in delivering breath taking entertainment for my
          audience
        </p>
      </div>
    </section>
  )
}

export default Hero
