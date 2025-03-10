import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import "./App.css";
import "./styles/Global.css";
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
      <div className='App'>
        <NavBar />
        <div id='content'>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Footer/>
          <Analytics />
        </div>
      </div>
  )
}

export default App
