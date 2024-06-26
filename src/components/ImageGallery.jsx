import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import styles from "./ImageGallery.module.css"

const ImageGallery = ({images, onImageClick}) => ( 
    <ul className={styles.gallery}>
        {
            images.map(({id, webformatURL, largeImageURL}) => (
              <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={()=> onImageClick(largeImageURL)}
              />
            ))
        }
 
    </ul>
);

ImageGallery.propTypes ={
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    onImageClick:PropTypes.func.isRequired,
};

export default ImageGallery;