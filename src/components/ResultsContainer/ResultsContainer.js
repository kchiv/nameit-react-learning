import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({suggestedNames}) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <p key={suggestedName}>{suggestedName}</p>;
    });

    return (
        <div className='results-container'>
            {suggestNameJsx}
        </div>
    );
};

export default ResultsContainer;