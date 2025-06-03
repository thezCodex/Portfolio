import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import StarBackground from '../component/StarBackground'
import NavBar from '../component/NavBar'
import HeroSection from '../component/HeroSection'
import AboutMe from '../component/AboutMe'
import SkillsSection from '../component/SkillsSection'
// import { ProjectSection } from '../component/ProjectSection'
import { ContactSection } from '../component/ContactSection'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
      <ThemeToggle/>
      <StarBackground/>
      <NavBar/>
      <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <SkillsSection/>
        {/* <ProjectSection/> */}
        <ContactSection/>
      </main>
    </div>
  )
}

export default Home
