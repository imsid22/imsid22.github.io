// Header.js
import React from 'react';
import Switch from 'react-switch';

// Updated Header.js to include the toggle

function Header({ toggleTheme, darkMode }) {
    return (
      <header className={`p-4 sticky top-0 z-50 w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            Siddhant Dube
          </div>
          <nav>
            <ul className="flex space-x-4">
            <li><a href="#timeline" className="text-gray-300 hover:text-white">Timeline</a></li>
            <li><a href="#visualizations" className="text-gray-300 hover:text-white">ML Visualizations</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
            <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
        <Switch 
          onChange={toggleTheme} 
          checked={darkMode} 
          onColor="#222" 
          offColor="#ddd" 
          checkedIcon={false} 
          uncheckedIcon={false} 
        />
      </header>
    );
  }

export default Header;




