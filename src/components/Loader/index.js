// Loader.js
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => (
    <div className="loader-container">
        <Oval
            height={80}
            width={80}
            color="#4B5563"
            ariaLabel="loading"
            secondaryColor="#6B7280"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    </div>
);

export default Loader;

