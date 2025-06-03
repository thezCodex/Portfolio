import React from 'react'
import {ArrowDown} from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
            <h1 className=' text-4xl md:text-6xl font-bold tracking-tight '>
                <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                <span className='text-primary opacity-0 animate-fade-in-delay-1'>Tolulope</span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>Ezekiel</span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'> 
              Mr Employer, i hope you find because i can provide anything you need as a Software Developer,a 
              little bit arrogant right? i know. It takes a lot to acquire the skills i posses and with my TeamSpirit and co-operation i would be fit
              to build Project and learn more about you
              ,but for now the the website is yours
            </p>
             <div className='opacity-0 pt-4 animate-fade-in-delay-4'>
              <a href="#projects" className='cosmic-button'>View my work</a>
             </div>
        </div>
      </div>
      <div className=' absolute bottom-8 right-1/2  transform translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-foreground mb-2'>Scroll</span>
        <ArrowDown className={"h-5 w-5 text-primary"}/>
      </div>
    </section>
  )
}

export default HeroSection
