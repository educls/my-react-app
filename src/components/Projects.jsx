import React, { useState } from 'react';
import './css/Projects.css';
import './css/ButtonSeeMore.css'
import printUnreal from '../assets/print-unreal.png'
import printConcord from '../assets/print-concord.png'

import videoUnreal from '../assets/record-unreal.mp4'
import videoConcord from '../assets/record-concord.mp4'

import VideoModal from './ModalVideo';

const Projects = () => {
  const descriptionConcord = `Uma aplicação desktop baseada no programa (Discord) 
      com a possibilidade de criar um servidor e convidar 
      pessoas a se juntarem, podendo ver quem está online / offline,
      tambem envio de mensagens instantaneas, e futuramente 
      canais de voz sendo possivel chamadas em grupos.`;
  const descriptionUnreal = `Desenvolvi um projeto pessoal utilizando a
            Unreal Engine 5, focado na criação de um ambiente
            virtual interativo, o objetivo principal foi mais para
            explorar a ferramenta e aprender.`;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = (src) => {
    setVideoSrc(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoSrc('');
  };


  return (
    <section id="projects" className="projects">
      <h2 data-aos="fade-left">My Projects</h2>
      <div className="project-list">
        {/* Adicione seus projetos aqui */}
        <div
          className="project-item"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3>Concord</h3>
          <p>{descriptionConcord}</p>
          <img src={printConcord} alt="" />

          <div>
            <button class="learn-more" onClick={() => openModal(videoConcord)}>
              <span aria-hidden="true" class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Veja mais</span>
            </button>
          </div>
        </div>
        <div
          className="project-item"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3>Unreal Engine game</h3>
          <p>{descriptionUnreal}</p>
          <img src={printUnreal} alt="" />
          <div>
            <button class="learn-more" onClick={() => openModal(videoUnreal)}>
              <span aria-hidden="true" class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Veja mais</span>
            </button>
          </div>
        </div>
      </div>
      <VideoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        videoSrc={videoSrc}
      />
    </section>
  );
}

export default Projects;
