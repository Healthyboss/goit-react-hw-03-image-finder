import React from 'react';
import {ThreeCircles} from 'react-loader-spinner'
import styles from './Loader.module.css'

const Loader = () => (
    <div className={styles.Loader}>
        <ThreeCircles
        type ="ThreeCircles"
        height={100}
        width={100}
        color="#4fa94d"/>
    </div>
);

export default Loader;