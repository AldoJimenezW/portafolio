import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo1.png'

const Navbar = () =>{
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            {/* Logo */}
            <div>
                <img src={Logo} alt="Logo Image" style={{width:'55px'}} />
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li> 
                <li>Contact</li>
            </ul>
            {/* Humburger */}
            <div className='md:hidden'>
                <FaBars />
           </div>
            {/* Mobile menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
            {/* Social media */}
            <div className='hidden'>

            </div>
        </div>
    )
}

export default Navbar