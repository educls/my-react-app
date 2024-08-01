import './App.css';
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import DownloadButton from './components/DownloadCVButton';

import videoBackground from './assets/background_video.mp4'

function App() {
  document.title = 'Eduardo Cesar'
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <div className="fullscreen-video-container">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Header />
        <div className="block-container">
          <div className='block-introduction'>
            <SocialMedia />
            <DownloadButton />
            {/* <CodeBlock /> */}
          </div>
        </div>
      </div>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;