import React, { useState } from 'react'
import { Link } from 'react-scroll'
import resume from '../assets/evan_ordona_resume2024.pdf'
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false);


    return (
        <div className='fixed flex justify-between w-screen py-2 text-white font-heading bg-background'>

            <div className='ml-2 text-xl lg:ml-16 lg:text-4xl'>evanordona</div>

            <div className='hidden text-xl lg:flex w-[500px] justify-evenly items-center lg:mr-5'>
                <Link to='about' smooth duration={500} className='transition ease-in-out hover:text-primary hover:scale-105'>about</Link>
                <Link to='skills' smooth duration={500} className='transition ease-in-out hover:text-primary hover:scale-105'>skills</Link>
                <Link to='projects' smooth duration={500} className='transition ease-in-out hover:text-primary hover:scale-105'>projects</Link>
                <a href={resume} download={true}>
                    <button className="relative inline-flex items-center justify-center px-4 py-2 text-base font-medium transition duration-200 ease-in-out rounded-md shadow-md cursor-pointer bg-secondary hover:bg-accent">
                        Download Resume
                    </button>
                </a>

            </div>

            <div onClick={() => setNav(!nav)} className='z-10 pr-4 cursor-pointer md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-2xl bg-background'>

                <Link onClick={() => setNav(!nav)} to='about' smooth duration={500} className='transition ease-in-out hover:text-primary hover:scale-105'>about</Link>
                <Link onClick={() => setNav(!nav)} to='skills' smooth duration={500} className='transition ease-in-out hover:text-primary hover:scale-105'>skills</Link>
                <Link onClick={() => setNav(!nav)} to='projects' smooth duration={500} className='transition ease-in-out hover:text-primary hover:scale-105'>projects</Link>


            </div>)}
        </div>
    )
}

export default Navbar