// Header.js
import React from 'react';

function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 w-full">
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
      </header>
    );
  }

export default Header;




