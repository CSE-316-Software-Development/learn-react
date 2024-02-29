import React, { useState } from 'react';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
    const [artists, setArtists] = useState(initialArtists);

    const handleDeleteArtist = (artistId) => {
        // Create a new array with the artist removed
        const updatedArtists = artists.filter(artist => artist.id !== artistId);
        setArtists(updatedArtists);
    };

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => handleDeleteArtist(artist.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
