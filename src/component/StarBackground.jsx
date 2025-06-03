import React, { useEffect, useState } from 'react'

const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [rifle, setRifle] = useState([])

    useEffect(() => {
     generateStars()
     generateRifle()

     const handleResize = () => {
        generateStars()
     }

     window.addEventListener('resize', handleResize)

     return  () => window.removeEventListener('resize', handleResize)
    },[])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        )
        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x:Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStars(newStars)
    }

    //Function for the Meteors animation

        const generateRifle = () => {
        const numberOfRifle = 4;
        const newRifle = []

        for (let i = 0; i < numberOfRifle; i++){
            newRifle.push({
                id:i ,
                size: Math.random() * 2 + 1,
                x:Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setRifle(newRifle)
    }

    
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-50'>
      {stars.map((stars) => (
        <div 
          key={stars.id} 
            className='star animate-pulse-subtle' 
            style={{
                width: stars.size + "px",
                height:stars.size + "px",
                left:stars.x + "%",
                top:stars.y + "%",
                opacity:stars.opacity,
                animationDuration: stars.animationDuration + "s",
        }}/>
      ))}

    {rifle.map((rifle) => (
        <div
         key={rifle.id} 
         className='meteor animate-meteor' 
         style={{
            width: rifle.size * 50 + "px",
            height:rifle.size + "px",
            left:rifle.x + "%",
            top:rifle.y + "%",
            animationDelay:rifle.delay,
            animationDuration: rifle.animationDuration + "s",
        }}/>
      ))}       

    </div>
  )
}

export default StarBackground
