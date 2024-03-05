import React from 'react'

const About = () => {
    return (
        <div name='about' className='font-heading w-screen bg-background pt-[10rem]'>

            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lightblue text-3xl font-bold'>about me</h1>

                <div className='bg-secondary w-[1000px] h-[500px] rounded-[3rem] mt-10 flex flex-col justify-center items-center text-xl hover:scale-110 transition-transform ease-in-out'>
                    <div className='w-[800px] flex flex-col justify-evenly h-[450px]'>
                        <div>

                            I am a passionate developer based in New Jersey. I have dedicated myself to programming
                            and have embarked on a journey of constant learning and growth. In December 2023, I completed my B.S. in Computer Science at the University of Maryland - College Park.
                        </div>

                        <div>
                            As a Full-Stack Developer, the diverse skill set I possess allows me to build/solve projects and problems with code. To me, it is such a rewarding feeling creating something of your own which accomplishes a solution or task.
                        </div>

                        <div>
                
                            From a young age, I have been determined to become a developer stemming from my love for video games. Outside of coding, you'll most likely find me at the gym, playing basketball, hanging with friends, or engaging in my most recent hobby - pickleball. 
                        </div>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default About