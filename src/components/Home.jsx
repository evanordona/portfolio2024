import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import headshot from '../assets/headshot.png'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



const Home = () => {
  const homeRef = useRef(null)

  useGSAP(() => {
    gsap.from(homeRef.current, {
      opacity: 0,
      duration: 3
    })
  })
  return (
    <div className='flex flex-col items-center w-screen h-screen font-heading bg-background' >
      <div className='flex flex-col justify-center items-center mt-[10rem]' ref={homeRef}>
        <h3 className='text-xl lg:text-3xl'>Hi, I'm <span className='font-bold text-primary'>Evan Ordona</span></h3>
        <h2 className='bg-clip-text text-[#c0c0c000] bg-gradient-to-r from-secondary via-accent to-secondary text-2xl lg:text-5xl font-bold'>A Full Stack Developer</h2>
        <p className='text-lg text-center lg:text-2xl text-gray'>Bringing visions to life through code and creativity</p>
      </div>

      <img src={headshot} alt='blah' style={{'object-fit' :' cover'}} className='size-[200px] lg:size-[325px] rounded-full mt-[5rem] lg:mt-[10rem] border-2 border-secondary hover:scale-125 transition-transform ease-in-out'></img>
    </div>
  )
}

export default Home