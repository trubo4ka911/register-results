import React from 'react';

const PersonCard = ({ person }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>ID: {person.id}</p>
      <p>Time: {person.time}</p>
    </div>
  );
};

export default PersonCard;
