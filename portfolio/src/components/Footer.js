import React from 'react';

function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-6 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            +1 (720) 938-5780 • siddhantd94@gmail.com
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/siddhantdube" className="text-gray-300 hover:text-white">LinkedIn</a>
            <a href="https://github.com/imsid22" className="text-gray-300 hover:text-white">GitHub</a>
          </div>
          <p>&copy; 2023 Siddhant Dube</p>
        </div>
      </footer>
    );
  }

export default Footer;