// import React from 'react';

// const PersonCard = ({ person }) => {
    
//   return (
//     <div>
//       <h2>{person.name? person.name : ""}</h2>
//       <p>ID: {person.id}</p>
//       <p>Time: {person.time}</p>
//     </div>
//   );
// };

// export default PersonCard;

import React from 'react';

function PersonCard({ person }) {
  console.log('person:', person);
  console.log('person.name:', person.name);
  console.log('person.email:', person.email);
const{name,email}=person
  return (
    <div>
      <h3>{person.name? person.name : ""}</h3>
      <p>{person.email}</p>
    </div>
  );
}

export default PersonCard;
