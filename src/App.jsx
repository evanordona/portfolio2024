import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div className='text-white font-heading'>
      <Navbar />
      <SocialLinks />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App