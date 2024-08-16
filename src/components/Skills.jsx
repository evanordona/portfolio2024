import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const Skills = () => {
      
    return (
        <div name='skills' className='font-heading w-screen bg-background pb-[15rem] pt-[10rem]'>

            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-2xl font-bold lg:text-3xl text-lightblue'>skills</h1>

                <div className='bg-accent w-[270px] lg:w-[700px] lg:h-[350px] rounded-[3rem] mt-10 flex flex-col items-center lg:flex-row lg:justify-between text-xl hover:scale-110 transition-transform ease-in-out'>
                    <div className='mx-10 my-5 bg-dark-accent rounded-2xl p-3 w-[12rem]'>
                        <div className='text-xl font-bold text-center'>Front-End</div>

                        <div className='flex flex-col items-center justify-center h-[200px] mt-5 opacity-80'>

                            <div>React</div>
                            <div>React Native</div>
                            <div>Tailwind</div>
                            <div>Figma</div>
                        </div>

                    </div>


                    <div className='mx-10 my-5 bg-dark-accent rounded-2xl p-3 w-[12rem]'>
                        <div className='text-xl font-bold text-center'>Back-end</div>
                        <div className='flex flex-col items-center justify-center mt-5 opacity-80 h-[200px]'>
                            <div>Node</div>
                            <div>Express</div>
                            <div>Supabase</div>
                            <div>MongoDB</div>
                            <div>Socket.io</div>
                            <div>AWS</div>

                        </div>
                    </div>

                    <div className='mx-10 my-5 bg-dark-accent rounded-2xl p-3 w-[10rem]'>
                        <div className='text-xl font-bold text-center'>Misc.</div>
                        <div className='flex flex-col items-center justify-center mt-5 opacity-80 h-[200px]'>
                            <div>Java</div>
                            <div>Python</div>
                            <div>Kotlin</div>
                            <div>Pandas</div>
                            <div>Git</div>
                            <div>Docker</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills