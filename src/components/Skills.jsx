import React from 'react'

const Skills = () => {
    return (
        <div name='skills' className='font-heading w-screen bg-background py-[10rem]'>

            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lightblue text-3xl font-bold'>skills</h1>

                <div className='bg-accent w-[700px] h-[350px] rounded-[3rem] mt-10 flex justify-between text-xl hover:scale-110 transition-transform ease-in-out'>
                    <div className='mx-10 my-5 bg-dark-accent rounded-2xl p-3 w-[10rem]'>
                        <div className='text-xl font-bold text-center'>Front-End</div>

                        <div className='flex flex-col justify-center items-center mt-5'>

                            <div>React</div>
                            <div>Tailwind</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JavaScript</div>
                        </div>

                    </div>


                    <div className='mx-10 my-5 bg-dark-accent rounded-2xl p-3 w-[10rem]'>
                        <div className='text-xl font-bold text-center'>Back-end</div>
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <div>Node</div>
                            <div>Express</div>
                            <div>MongoDB</div>
                            <div>OAuth</div>
                            <div>Socket.io</div>

                        </div>
                    </div>

                    <div className='mx-10 my-5 bg-dark-accent rounded-2xl p-3 w-[10rem]'>
                        <div className='text-xl font-bold text-center'>Misc.</div>
                        <div className='flex flex-col justify-center items-center mt-5'>
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