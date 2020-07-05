import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange }) => {
    //functional components - no state no lifecycle
    return (
        <input
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    )
}
