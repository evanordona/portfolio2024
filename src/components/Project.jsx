import React from 'react'

const Project = ({ className, title, description, demoLink, gitLink, img }) => {



    return (
        <div className={`${className} mx-3 flex flex-col w-[300px] h-[450px] bg-project rounded-3xl items-center justify-between hover:scale-105 glow transition ease-in-out`}>

            <img src={`${img}`} alt='project' className='mt-3 w-[250px] h-[175px] object-cover border-black border-2 rounded-xl' />
            <div className='text-2xl'>{title}</div>
            <div className='text-lg text-text text-center w-[275px]'>{description}</div>
            <div className='w-[200px] flex justify-evenly mb-3'>
                {
                    demoLink ? <button onClick={() => location.href=demoLink} className='p-3 bg-gray rounded-2xl hover:bg-accent transition ease-in-out'>Demo</button> : <></>
                }
                
                <button onClick={() => location.href=gitLink} className='text-black p-3 bg-white hover:bg-secondary hover:text-white transition ease-in-out rounded-2xl'>GitHub</button>
            </div>
        </div>
    )
}

export default Project