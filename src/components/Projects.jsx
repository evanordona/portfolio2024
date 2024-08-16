import React from 'react'
import Project from './Project'
import mak from '../assets/mak.png'
import food from '../assets/foodtracker.png'
import nba from '../assets/nba.png'
import pocketstories from '../assets/pocket-stories.png'


const Projects = () => {

    return (
        <div name='projects' className='w-screen font-heading bg-background pt-[15rem]'>

            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-2xl font-bold text-lightblue lg:text-3xl'>projects</h1>

                <div className='grid-cols-3 mx-auto mt-10 lg:grid'>

                    <Project className={"border-2 border-primary mb-5"} title={"Lords Duel"} description={"Built a multiplayer card game with React, Socket.io, Express, and Tailwind."} img={mak} gitLink={"https://github.com/evanordona/mak_multi"} demoLink={"https://mak-game.onrender.com/"} />
                    <Project className={"border-2 border-green-500 mb-5"} title={"Pocket Stories"} description={"Journal your every day life using pocket stories. Record how your day went and add custom tags. Easily search for your pocket stories by filtering by date or by tag. Used React, Tailwind, and SupaBase"} img={pocketstories} gitLink={"https://github.com/evanordona/pocket-stories"} demoLink={"https://pocket-stories.onrender.com/"} />
                    <Project className={"border-2 border-accent mb-5"} title={"GainzTracker"} description={"Personalized calorie tracking app. Features daily streaks, reviewing previous days, and data visualization. User authentication through OAuth, MongoDB for the database, Chart.js for visualization."} img={food} gitLink={"https://github.com/evanordona/calorie-web-app"} demoLink={"https://gainztracker.onrender.com/"} />
                    <Project className={"border-2 border-red-600 mb-5"} title={"ZapTask"} description={"Published a productivity app to App Store, gaining real users. Developed with React Native and Tailwind."} demoLink={'https://apps.apple.com/us/app/zaptasked/id6593692907?platform=iphone'}/>
                    <Project className={"border-2 border-orange-700"} title={"NBA Odds Calc"} description={"Multiple APIs used to scrape today's nba games and output a spread using an algorithm."} img={nba} gitLink={"https://github.com/evanordona/odds_calculator"} />
                    <Project className={"border-2 border-yellow-500 mb-5"} title={"RL Montage Maker"} description={"Custom Rocket League montage maker for myself in python. Automatically clips and string together mp4 files of your recent saved Rocket League replay games. Uses pyautogui, asyncio, pyautogui"}  gitLink={"https://github.com/evanordona/rl-montage"}/>

                </div>
            </div>
        </div>
    )
}

export default Projects