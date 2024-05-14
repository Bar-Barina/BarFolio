import React from 'react'
import MyImg from '../assets/imgs/MyImg.jpg'

const Hero = () => {
  return (
    <section className='hero-main-section flex auto-center'>
      <div className='main-text-wrapper'>
        <h1>
          <span>Hi, I'm </span>
          Bar Barina.
        </h1>
        <h1>Front-End Developer.</h1>
        <p>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <div className='blue-colored-div'></div>
        <div className='lightblue-colored-div'></div>
      </div>
      <div className='img-background'>
        <img src={MyImg} alt='avatar' className='avatar' />
      </div>

      {/* <img
        src='https://mattfarley.ca/img/hero-devices.svg'
        alt='avatar'
        className='devices'
      />
      <div className='purple-div flex column'> */}
      {/* <h3>Hi, I’m Bar. Nice to meet you.</h3>
        <p>
          A Front-End developer at day, and a professional wrestler at night who
          highly skilled in delivering breath taking entertainment for my
          audience
        </p> */}
      {/* </div> */}
    </section>
  )
}

export default Hero
