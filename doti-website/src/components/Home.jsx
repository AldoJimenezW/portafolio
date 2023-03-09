import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#6fc2b0]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aldo Jimenez W</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Computer Engineer student living in Chile.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">I am a computer engineering student with the goal of dedicating myself to software development, in this page I will show you all my progress in the world of development.</p>
                <div>
                    <button className="text-white border-2 px-6 py-3 my-2 items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0]">Look at my work <HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Home