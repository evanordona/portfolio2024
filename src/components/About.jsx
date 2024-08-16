import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const About = () => {

    const aboutRef = useRef(null)
    // useGSAP(() => {
    //     gsap.from(aboutRef.current, {
    //         x: '-100%',
    //         duration: 2,
    //         ease: 'bounce',
    //         scrollTrigger: {
    //             trigger: aboutRef.current,
    //         },
    //     })
    // })
    return (
        <div name='about' className='font-heading w-screen bg-background pt-[10rem]'>

            <div className='flex flex-col items-center justify-center ' ref={aboutRef}>

                <h1 className='text-2xl font-bold lg:text-3xl text-lightblue'>about me</h1>

                <div className='bg-secondary w-[300px] lg:w-[1000px] lg:h-[500px] rounded-[3rem] mt-10 flex flex-col justify-center items-center text-md lg:text-xl hover:scale-110 transition-transform ease-in-out' >
                    <div className='flex flex-col py-5 justify-evenly px-7 h-[850px] lg:h-[500px] opacity-80'>
                        <div>

                            I'm a passionate developer based in New Jersey. I've immersed myself in the world of programming, embracing a journey of continuous learning and innovation. My dedication culminated in a Computer Science B.S. from the University of Maryland - College Park in December 2023.
                        </div>

                        <div>
                            The diverse skill I possess is my toolbox for crafting solutions and bringing ideas to life. There's an unparalleled satisfaction in creating something that you have designed and architected from scratch. 
                        </div>

                        <div>

                            From a young age, my determination to become a developer stemmed from my love of video games. I knew I wanted to be a programmer since the 2nd grade! Outside of coding, you'll most likely find me at the gym, shooting hoops on the basketball court, or indulging in my most recent hobby - pickleball.
                        </div>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default About