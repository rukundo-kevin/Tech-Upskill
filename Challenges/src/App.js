import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import WhoPage from './components/Who';
import HowPage from './components/How';
import Footer from './components/Footer';
import WhyPage from './components/Why';

function App() {
  return (
    <>
     <Header />
     <LandingPage />
     <WhoPage />
     <WhyPage />
     <HowPage />
     <Footer />
    </>
  );
}

export default App;
