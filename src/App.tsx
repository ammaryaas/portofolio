// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Skill from './section/Skill'
import Experience from './section/Experience'
import Contact from './section/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section id='about'><About /></section>
      <Skill />
      <section id='projects'><Project /></section>
      <section id='experience'><Experience /></section>
      <section id='contacts' className='bg-background w-full pt-32 pb-56'>
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
