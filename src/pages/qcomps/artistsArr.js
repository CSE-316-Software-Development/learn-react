import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        // artists.concat({
        //   id: nextId++,
        //   name: name,
        // });
        // const newArtist = {id: nextId++, name: name};
        // setArtists([...artists, newArtist]);
        setArtists(artists.concat({
          id: nextId++,
          name: name,
        }))

      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
