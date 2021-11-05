import React from 'react';
import AppButton from './AppButton';

const Searchbar = ({ handleSearch, setText }) => {
    return (
        <div>
            <input type="text" placeholder="Search" onChange={setText} />
            <AppButton buttonStyle='search' title='Search' handleClick={handleSearch} />
        </div>
    );
};

export default Searchbar;