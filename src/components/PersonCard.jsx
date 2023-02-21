import React from 'react';
import {
  ParticipantId,
  ParticipantName,
  ParticipantTime,
  CardWrapper,
  DeleteButton,
} from "./PeopleList.styled";

const PersonCard = ({ person, onDeleteParticipant, disabled }) => {
  const handleDeleteButtonClick = () => {
    onDeleteParticipant(person.id);
  };

  return (
<CardWrapper>
      <ParticipantId>ID: {person.id}</ParticipantId>
      <ParticipantName>Name: {person.name}</ParticipantName>
      <ParticipantTime>Time: {person.time}</ParticipantTime>
      <DeleteButton onClick={handleDeleteButtonClick} disabled={disabled}>
        Delete
      </DeleteButton>
    </CardWrapper>
  );
};

export default PersonCard;
