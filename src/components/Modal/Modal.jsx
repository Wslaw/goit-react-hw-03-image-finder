import React from 'react';
import styles from './modal.module.css';

const Modal = ({ image }) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      <img src={image} alt="#" />
    </div>
  </div>
);
export default Modal;
