import React from 'react';
import { data } from '../data';

const TotalParticipants = () => {
  return (
    <div>
      Total participants: {data.length}
    </div>
  );
};

export default TotalParticipants;
