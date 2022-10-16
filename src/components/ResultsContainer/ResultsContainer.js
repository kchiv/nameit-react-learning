import React from 'react';

const ResultsContainer = ({suggestedNames}) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <p>{suggestedName}</p>;
    });

    return (
        <div>
            {suggestNameJsx}
        </div>
    );
};

export default ResultsContainer;