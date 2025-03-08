import React from 'react';
import * as M from './Modal.styles';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <M.ModalOverlay onClick={onClose}>
      <M.ModalContent onClick={(e) => e.stopPropagation()}>
        <M.ModalHeader>
          <h3>{title}</h3>
          <M.CloseButton onClick={onClose}>&times;</M.CloseButton>
        </M.ModalHeader>
        {children}
      </M.ModalContent>
    </M.ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;