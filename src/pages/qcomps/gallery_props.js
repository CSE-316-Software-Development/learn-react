import React from 'react';

const scientistsData = [
  {
    name: 'Maria Skłodowska-Curie',
    imageUrl: 'https://i.imgur.com/szV5sdGs.jpg',
    profession: 'physicist and chemist',
    awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
    discovery: 'polonium (element)'
  },
  {
    name: 'Katsuko Saruhashi',
    imageUrl: 'https://i.imgur.com/YfeOqp2s.jpg',
    profession: 'geochemist',
    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discovery: 'a method for measuring carbon dioxide in seawater'
  }
];

function ScientistProfile({ scientist }) {
  return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <img
            className="avatar"
            src={scientist.imageUrl}
            alt={scientist.name}
            width={70}
            height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: </b>
            {scientist.awards.join(', ')}
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovery}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        {scientistsData.map((scientist, index) => (
            <ScientistProfile key={index} scientist={scientist} />
        ))}
      </div>
  );
}
