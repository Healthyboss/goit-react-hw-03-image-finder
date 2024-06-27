import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({largeImageURL, onClose}) => {

    useEffect(() => {
    
        const handleKeyDown = (event) => {
            if (event.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return() => {
        
        window.removeEventListener('keydown', handleKeyDown);

        }

    },[onClose]);

    const handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      };

      return (
        <div className={styles.modal} onClick={handleBackdropClick}>
          <div >
            <img className={styles.largeImg} src={largeImageURL} alt="" />
          </div>
        </div>
      );

}


Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;