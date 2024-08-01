import React from 'react';
import './css/About.css';
import jsIcon from '../assets/js-icon.jpeg'
import tsIcon from '../assets/ts-icon.png'
import cssIcon from '../assets/css-icon.png'
import htmlIcon from '../assets/html-icon.png'
import dartIcon from '../assets/dart-icon.png'
import flutterIcon from '../assets/flutter-icon.png'
import kotlinIcon from '../assets/kotlin-icon.png'
import reactIcon from '../assets/react-icon.png'
import pythonIcon from '../assets/python-icon.png'

const About = () => {
  return (
    <section id="about" 
    className="about" 
    data-aos="fade-right" 
    data-aos-delay="100">
      <h2>About Me</h2>
      <p>Sou um desenvolvedor full stack Jr.</p>
      <h3>Técnologias</h3>
      <div className='row-tec-icons'>
        <img src={jsIcon} alt="" />
        <img src={tsIcon} alt="" />
        <img src={cssIcon} alt="" />
        <img src={htmlIcon} alt="" />
        <img src={dartIcon} alt="" />
        <img src={flutterIcon} alt="" />
        <img src={kotlinIcon} alt="" />
        <img src={reactIcon} alt="" />
        <img src={pythonIcon} alt="" />
      </div>
    </section>
  );
}

export default About;
