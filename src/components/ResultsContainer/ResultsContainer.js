import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({suggestedNames}) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <p>{suggestedName}</p>;
    });

    return (
        <div className='results-container'>
            <p>{suggestNameJsx}</p>
        </div>
    );
};

export default ResultsContainer;