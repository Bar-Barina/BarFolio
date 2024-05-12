import React from 'react'

const Header = () => {
  return (
    <section className='header-main-section flex space-between justify-center'>
      <span className='logo'>Bar.dev</span>
      <div className='nav-content'>
        <span>About</span>
        <span>Experience</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </section>
  )
}

export default Header
