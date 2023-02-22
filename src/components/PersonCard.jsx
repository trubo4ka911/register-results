import React from 'react';

const PersonCard = ({ result }) => {
    
  return (
    <div>
      <h2>{result.name}</h2>
      <p>ID: {result.id}</p>
      <p>Time: {result.time}</p>
    </div>
  );
};

export default PersonCard;
