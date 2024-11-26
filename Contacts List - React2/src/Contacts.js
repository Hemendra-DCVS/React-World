
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setContacts(response.data.results);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.login.uuid}>
            {contact.name.first} {contact.name.last} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
