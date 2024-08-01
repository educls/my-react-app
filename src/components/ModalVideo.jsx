import React from 'react';
import Modal from 'react-modal';
import './css/ModalVideo.css';

const VideoModal = ({ isOpen, onRequestClose, videoSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>X</button>
      <video width="100%" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Modal>
  );
};

export default VideoModal;
