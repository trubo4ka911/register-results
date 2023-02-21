import React, { useState } from 'react';

const Store = () => {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  const deleteParticipant = (id) => {
    const updatedParticipants = participants.filter((participant) => participant.id !== id);
    setParticipants(updatedParticipants);
  };

  return { participants, addParticipant, deleteParticipant };
};

export default Store;
