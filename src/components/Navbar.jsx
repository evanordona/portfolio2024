import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='text-white font-heading flex w-screen justify-between bg-background fixed'>

            <div className='text-4xl ml-16'>evanordona</div>

            <div className='text-xl flex w-[500px] justify-evenly items-center mr-5'>
                <Link to='about' smooth duration={500} className='hover:text-primary hover:scale-105 transition ease-in-out'>about</Link>
                <Link to='skills' smooth duration={500} className='hover:text-primary hover:scale-105 transition ease-in-out'>skills</Link>
                <Link to='projects' smooth duration={500} className='hover:text-primary hover:scale-105 transition ease-in-out'>projects</Link>
                <a href={`./evan_ordona_resume2024.pdf`} download={true}>
                    <button class="inline-flex items-center justify-center px-4 py-2 text-base font-medium rounded-md relative bg-secondary transition duration-200 ease-in-out cursor-pointer hover:bg-accent shadow-md">
                        Download Resume
                    </button>
                </a>

            </div>
        </div>
    )
}

export default Navbar