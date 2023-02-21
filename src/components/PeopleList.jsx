import React, { useState } from "react";
import PersonCard from "./PersonCard";
import {
  Title,
  ParticipantWrapper,
  ParticipantId,
  ParticipantName,
  ParticipantTime,
  ListWrapper,
  CardWrapper,
  DeleteButton,
} from "./PeopleList.styled";

const PeopleList = ({ peopleData, store, searchTerm }) => {
  const [participants, setParticipants] = useState(store.participants);

  const handleDeleteParticipant = (id) => {
    store.deleteParticipant(id);
    setParticipants(store.participants);
  };

  const filteredPeopleData = peopleData.filter((person) => {
    const nameMatches = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const idMatches = person.id.toString().includes(searchTerm);
    return nameMatches || idMatches;
  });

  return (
    <>
    <Title>Participants:</Title>
    <ListWrapper>
      {filteredPeopleData.map((person) => (
        <CardWrapper key={person.id}>
          <PersonCard
            person={person}
            onDeleteParticipant={handleDeleteParticipant}
            disabled={participants.some(
              (participant) => participant.id === person.id
            )}
          />
        </CardWrapper>
      ))}
    </ListWrapper>
    </>
  );
};
export default PeopleList;
