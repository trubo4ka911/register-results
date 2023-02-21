import React from 'react';
import { CardWrapper, Name, Id, Time } from './PersonCard.styled';

const PersonCard = ({ person }) => {
  return (
    <CardWrapper>
      <Name>{person.name}</Name>
      <Id>{person.id}</Id>
      <Time>{person.time}</Time>
    </CardWrapper>
  );
};

export default PersonCard;
