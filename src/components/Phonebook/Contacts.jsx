import React from 'react'

const Contacts = ( {onContact} ) => (<ul>
 
    {onContact.map(({id, name,phone} ) => (
      <li key={id}>{name} {phone} </li>
      
    ))}
  </ul>)
  
;

export default Contacts
// const Contacts = ( {onContact} ) => {return(<ul>
//     {onContact.map((contact ) => (
//       <li key={contact.id}>{contact.name} {contact.phone} </li>
//     ))}
//   </ul>)}
  
// ;