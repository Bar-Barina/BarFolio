import React from 'react'
import MyImg from '../assets/imgs/MyImg.jpg'
import Skills from './Skills'
import HeroLinks from './HeroLinks'

const Hero = () => {
  return (
    <section className='hero-main-section'>
      <section className='hero-main-wrapper flex auto-center'>
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
          <HeroLinks />
        </div>
        <div className='img-background'>
          <img src={MyImg} alt='avatar' className='avatar' />
        </div>
      </section>
      <Skills />
    </section>
  )
}

export default Hero
