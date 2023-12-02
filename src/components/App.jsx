import React from 'react';
import { ContactsList } from './ContactsList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  


    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingLeft: '20px',
          paddingBottom: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
          <ContactsList/>
      </div>
    );
  }

