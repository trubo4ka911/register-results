import React, { useState } from 'react';
import { data } from '../data';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const newPerson = {
      id: data().length + 1,
      name: `${firstName} ${lastName}`,
    };
    data().push(newPerson);
    console.log(data());
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
