import React, { useState } from 'react';
import { data } from '../data';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const id = data.length + 1; // new id is last id + 1
    const newUser = { id, name: `${firstName} ${lastName}` };
    data.push(newUser);
    console.log('data:', data); // verify data is updated
    e.target.firstName.value = '';
    e.target.lastName.value = '';
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
