import styled from "@emotion/styled";

export const ParticipantWrapper = styled.div`
  margin-bottom: 20px;
  padding: 10px;
`;

export const ParticipantId = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const ParticipantName = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const ParticipantTime = styled.p`
  font-size: 12px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin: 10px auto;

  &:disabled {
    background-color: gray;
    cursor: default;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CardWrapper = styled.div`
  border: 1px solid gray;
  width: 18rem;
  display: flex;
  align-items: center;

  flex-direction: column;
`;
export const Title = styled.h2`
  margin: 20px auto;
  text-align: center;
`;
