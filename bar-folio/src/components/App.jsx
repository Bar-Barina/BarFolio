import '../../src/assets/styles/styles.scss'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import ProjectList from './ProjectList'
import React, { useEffect, useState } from 'react'

function App() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('../../public/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectList projects={projects} />
    </>
  )
}

export default App
