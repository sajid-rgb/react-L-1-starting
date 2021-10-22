import React from 'react';

const Error = ({errorMessage}) => {
    return (
        <div className="text-danger">
            <h6>{errorMessage}</h6>
        </div>
    );
};

export default Error;