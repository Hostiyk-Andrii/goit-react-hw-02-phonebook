import React from 'react';

const ContactList = ({ onContact }) => (
  <ul>
    {onContact.map(({ id, name, number }) => (
      <li key={id}>
        {name} {number}
      </li>
    ))}
  </ul>
);

export default ContactList;
