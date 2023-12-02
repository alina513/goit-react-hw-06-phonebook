

import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';


export const ContactsList = () => {
  const filters = useSelector(state => getFilter(state));
  const contacts = useSelector(state => getContacts(state));

  const displayedContacts = (contacts, filters) => {
      return contacts.filter(value =>
        value.contact.name.toLowerCase().includes(filters.toLowerCase())
      );
    
  };

  const filteredContacts = displayedContacts(contacts, filters);


  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact value={contact} key={contact.id} />
      ))}
    </ul>
  );
};
