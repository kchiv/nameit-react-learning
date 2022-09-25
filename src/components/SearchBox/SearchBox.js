import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div className='search-container'>
            <input 
                onChange={(event) => props.onInputChange()}
                placeholder='Type keywords' 
                className='search-input' />
        </div>
    );
};

export default SearchBox;