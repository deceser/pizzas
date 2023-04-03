import React from 'react';
import {Oval} from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={2}
                color="#fe5f1e"
                secondaryColor="white"
            />
        </div>
    );
};

export default Loader;
