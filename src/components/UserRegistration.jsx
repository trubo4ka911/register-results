import React, { useState } from 'react';
import { data } from '../data';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [people, setPeople] = useState(data);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      id: people.length + 1,
      name: `${firstName} ${lastName}`,
    };
    setPeople([...people, newPerson]);
    event.target.reset();
  };
  

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
