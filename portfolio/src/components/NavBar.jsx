import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
    <div className='flex justify-between items-center w-full h-[80px] px-4 text-white bg-black fixed'>
        
        <div>
            <h1>Toggle Switch Here</h1>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='cursor-pointer hover:scale-105 duration-200'>Home</li>
            <li className='cursor-pointer hover:scale-105 duration-200'>About</li>
            <li className='cursor-pointer hover:scale-105 duration-200'>Experience</li>
            <li className='cursor-pointer hover:scale-105 duration-200'>Work</li>
            <li className='cursor-pointer hover:scale-105 duration-200'>Contact</li>
        </ul>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'> 
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        {/* Mobile Menu */}
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl cursor-pointer hover:scale-105 duration-200'>Home</li>
            <li className='py-6 text-4xl cursor-pointer hover:scale-105 duration-200'>About</li>
            <li className='py-6 text-4xl cursor-pointer hover:scale-105 duration-200'>Experience</li>
            <li className='py-6 text-4xl cursor-pointer hover:scale-105 duration-200'>Work</li>
            <li className='py-6 text-4xl cursor-pointer hover:scale-105 duration-200'>Contact</li>
        </ul>
        
        {/* Social Icons */}

        <div className='hidden'> </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* <ul className='hidden md:flex'>

            {linkArr.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    {link}
                </li>
            ))}

        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500'>
            <FaBars size={30} />
        </div> */}
    </div>
    );
};

export default NavBar;