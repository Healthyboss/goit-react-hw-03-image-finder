import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

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
        <div  onClick={handleBackdropClick}>
          <div >
            <img src={largeImageURL} alt="" />
          </div>
        </div>
      );

}


Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;