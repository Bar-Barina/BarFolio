import React from 'react'
import MyImg from '../assets/imgs/MyImg.jpg'
import { getSvg } from '../services/svg.service'

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
          <div className='links'>
            <a
              href='https://www.linkedin.com/in/bar-barina/'
              target='_blank'
              rel='noopener noreferrer'
              className='pointer'
              dangerouslySetInnerHTML={{
                __html: getSvg('linkedin'),
              }}
            ></a>
            <a
              href='https://github.com/Bar-Barina'
              target='_blank'
              rel='noopener noreferrer'
              className='pointer'
              dangerouslySetInnerHTML={{
                __html: getSvg('github'),
              }}
            ></a>
          </div>
        </div>
        <div className='img-background'>
          <img src={MyImg} alt='avatar' className='avatar' />
        </div>
      </section>
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

      {/* <div className='purple-div flex column'> */}
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
