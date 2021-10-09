import React from 'react';

const Loader = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="spinner-border text-center" style={{ width: "3rem", height: "3rem", color: 'red' }} role="status">
            </div>
        </div>
    );
};

export default Loader;