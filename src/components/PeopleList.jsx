import React from "react";
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
  const participants = store.participants;

  const handleDeleteParticipant = (id) => {
    store.deleteParticipant(id);
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
        <div>
          {participants.map((participant) => (
            <ParticipantWrapper key={participant.id}>
              <ParticipantId>ID: {participant.id}</ParticipantId>
              <ParticipantName>Name: {participant.name}</ParticipantName>
              <ParticipantTime>Time: {participant.time}</ParticipantTime>
              <DeleteButton
                onClick={() => handleDeleteParticipant(participant.id)}
              >
                Delete
              </DeleteButton>
            </ParticipantWrapper>
          ))}
        </div>
      </ListWrapper>
    </>
  );
};

export default PeopleList;
