import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { X,Menu } from 'lucide-react';


  const navItems = [
        {name: "Home", href: "#hero"},
        {name: "About", href: "#about"},
        {name: "Contact", href: "#contact"},
        {name: "Project", href: "#project"},
        {name: "Skills", href: "#skills"},
    ]
    
const NavBar = () => {
  const [isScrolled , setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
         setIsScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <nav 
     className={cn('fixed w-full z-40  bg-background', 
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
     )}>      

     <div className='container flex items-center justify-between'>
        <a href="#hero" className='text-xl font-bold text-primary flex items-center'>
            <span className='relative z-10'>
                <span className='text-glow text-foreground'>TehzTech</span>Portfolio
            </span>
        </a>

      {/* {Desktop navbar} */}

      <div className='hidden md:flex space-x-8'>
        {navItems.map((items, key) =>(
          <a key={key} href={items.href} className='text-foreground/80 hover:text-foreground transition-colors duration-300'>
            {items.name}
          </a>
        ))}
      </div>

            {/* {Mobile Menu navbar} */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)}
              className='md:hidden p-2 text-foreground z-50'
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

        <div className={cn('fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}>
            <div className='flex flex-col space-y-8 text-xl'>
              {navItems.map((items, key) =>(
                  <a key={key} href={items.href} className='text-foreground/80 hover:text-foreground transition-colors duration-300'
                  onClick={() => setIsMenuOpen(false)}>
                    {items.name}
                 </a>
              ))}
           </div>
      </div>
     </div>
    </nav> 
  )
}

export default NavBar
