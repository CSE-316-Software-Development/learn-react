import React, { useState } from 'react';
import { sculptureList } from '../../data/data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        const newIndex = index + 1;
        setIndex(newIndex >= sculptureList.length ? 0 : newIndex);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    const sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleNextClick}>
                {index === sculptureList.length - 1 ? 'Restart' : 'Next'}
            </button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide details' : 'Show details'}
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
