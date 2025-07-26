import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import React from 'react';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
 

  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      
      <h1 style={{ textAlign: 'center' }}>User Profiles</h1>

      {/* ✅ Use UserProfile with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="John Doe" 
        age="30" 
        bio="Software engineer who enjoys coding and traveling" 
      />
      <Counter />
      <Footer />
    </div>
    
  )
}

export default App
