import React from 'react';
import {ThreeCircles} from 'react-loader-spinner'

const Loader = () => (
    <div className="loader">
        <ThreeCircles
        type ="ThreeCircles"
        height={100}
        width={100}
        color="#4fa94d"/>
    </div>
);

export default Loader;