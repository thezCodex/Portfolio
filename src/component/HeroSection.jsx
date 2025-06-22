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
               A passionate front-end developer crafting responsive, accessible, and performance-driven websites. I
                turn ideas into interactive digital experiences using modern tools like React, Tailwind CSS, and more.
               With a strong eye for design and detail, I build intuitive interfaces that not only look good — but feel right.
                Whether it's a startup landing page or a dynamic web app, I focus on clean code, smooth UX, and scalable solutions.
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
