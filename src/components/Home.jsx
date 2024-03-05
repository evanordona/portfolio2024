import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center w-screen h-screen font-heading bg-background'>
        <div className='flex flex-col justify-center items-center mt-[10rem]'>
            <h3 className='text-3xl'>Hi, I am <span className='text-primary font-bold'>Evan Ordona</span></h3>
            <h2 className='bg-clip-text text-[#c0c0c000] bg-gradient-to-r from-secondary via-accent to-secondary text-5xl font-bold'>A Full Stack Developer</h2>
            <p className='text-2xl text-gray'>Building passion-driven projects for a decade</p>
        </div>

        <img src='' alt='blah' className='h-[325px] w-[325px] rounded-full mt-[10rem] border-2 border-white hover:scale-125 transition-transform ease-in-out'></img>
    </div>
  )
}

export default Home