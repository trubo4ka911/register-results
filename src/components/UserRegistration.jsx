import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { data } from '../data';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: `${firstName} ${lastName}`
    };

    data(newUser);

    setFirstName('');
    setLastName('');
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
