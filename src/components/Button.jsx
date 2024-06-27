import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({onClick}) => {
    return(
    <button type='button' className= {styles.buttonLoadMore} onClick={onClick}>
        Load More
    </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;