import React from 'react'
import Project from './Project'
import mak from '../assets/mak.png'
import food from '../assets/foodtracker.png'
import nba from '../assets/nba.png'


const Projects = () => {
    return (
        <div name='projects' className='font-heading w-screen bg-background py-10 pb-[10rem]'>

            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lightblue text-3xl font-bold'>projects</h1>

                <div className='mt-10 flex justify-evenly items-center '>

                    <Project className={"border-2 border-primary"} title={"Multiplayer Game"} description={"Built a multiplayer card game with React, Socket.io, Express, and Tailwind. Similar to club penguin card-jitsu game."} img={mak} gitLink={"https://github.com/evanordona/mak_multi"} demoLink={"https://mak-game.onrender.com/"} />
                    <Project className={"border-2 border-accent"} title={"Food Tracking App"} description={"Calorie and Protein tracking app. Implemented user authentication with OAuth and GoogleSSO. Uses MongoDB as a database. Visualization of data via Chart.js"} img={food} gitLink={"https://github.com/evanordona/calorie-web-app"} demoLink={"https://gainztracker.onrender.com/"} />
                    <Project className={"border-2 border-secondary"} title={"NBA Odds Calc."} description={"Uses multiple APIs to collect todays nba games and spit out a calculated spread using an algorithm for each game. Uses MERN stack."} img={nba} gitLink={"https://github.com/evanordona/odds_calculator"} />

                </div>

            </div>

        </div>
    )
}

export default Projects