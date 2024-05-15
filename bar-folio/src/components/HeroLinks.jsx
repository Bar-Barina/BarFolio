import React from 'react'
import { getSvg } from '../services/svg.service'

const HeroLinks = () => {
  return (
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
  )
}

export default HeroLinks
