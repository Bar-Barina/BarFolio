import React from 'react'
import MyWrestlingImg from '../assets/imgs/MyWrestlingImg.jpg'
import MyWorkImg from '../assets/imgs/MyWorkImg.jpg'

const About = () => {
  return (
    <section className='about-main-section'>
      <img src={MyWorkImg} alt='MyWorkImg' className='work-img' />
      {/* <img
        src={MyWrestlingImg}
        alt='MyWrestlingImg'
        className='wrestling-img'
      /> */}
      <div className='about-text-wrapper flex column'>
        <h4>About me</h4>
        <h2>Front-End Developer based in Israel 📍</h2>
        <p>My passion is to create and develop a clean UI/UX for my users.</p>
        <p>
          My main stack currently is React/vite.js in combination with Sass and
          JavaScript.
        </p>
      </div>
    </section>
  )
}

export default About
