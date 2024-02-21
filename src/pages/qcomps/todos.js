import React from 'react';

const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    const { name, imageId, imageSize, theme } = person;
    const imageUrl = `${baseUrl}${imageId}${imageSize}.jpg`;

    return (
        <div style={theme}>
            <h1>{name}'s Todos</h1>
            <img className="avatar" src={imageUrl} alt={name} />
        </div>
    );
}
