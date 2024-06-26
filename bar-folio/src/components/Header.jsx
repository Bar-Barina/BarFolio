import React from 'react'

const Header = () => {
  return (
    <section className='header-main-section flex space-between align-center'>
      <span className='logo pointer'>BarFolio</span>
      <div className='nav-content'>
        <span className='pointer'>About</span>
        <span className='pointer'>Projects</span>
        <span className='pointer'>Contact</span>
      </div>
    </section>
  )
}

export default Header
