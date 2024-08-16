import React from 'react'

const Project = ({ className, title, description, demoLink, gitLink, img }) => {
    return (
        <div className={`${className} mx-3 flex flex-col w-[300px] h-[450px] bg-project rounded-3xl items-center justify-between hover:scale-105 glow transition ease-in-out`}>

            {
                img && (<img src={`${img}`} alt='project' className='mt-3 w-[250px] h-[175px] object-cover border-black border-2 rounded-xl' />)
            }
            <div className={`my-2 text-2xl ${!img && 'mt-20'}`}>{title}</div>
            <div className='text-lg text-wrap text-start h-90 w-[250px] opacity-80'>{description}</div>
            <div className='w-[200px] flex justify-evenly mb-3'>
                {
                    demoLink ? <button onClick={() => window.open(demoLink)} className='p-3 transition ease-in-out bg-gray rounded-2xl hover:bg-accent'>Demo</button> : <></>
                }
                
                <button onClick={() => window.open(gitLink)} className='p-3 text-black transition ease-in-out bg-white hover:bg-secondary hover:text-white rounded-2xl'>GitHub</button>
            </div>
        </div>
    )
}

export default Project