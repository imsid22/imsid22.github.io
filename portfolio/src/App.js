import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <Footer />
    </div>
  );
};

export default App;
