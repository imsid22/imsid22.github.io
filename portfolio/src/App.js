import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="flex-grow flex items-center justify-center">
        {/* ... rest of your app content */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
