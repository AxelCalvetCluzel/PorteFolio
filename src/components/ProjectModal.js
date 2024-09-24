// src/components/ProjectModal.js
import React from 'react';
import Modal from 'react-modal';

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      contentLabel="Détails du projet"
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
      {project && (
        <div>
          <h2>{project.title}</h2>
          <p>{project.details}</p>
          <button onClick={onRequestClose} className="close-modal-btn">Fermer</button>
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
