import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import { ContactList } from './ContactList';

function App() {

  const key = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem(key, contacts));
    if (list) setContacts(list);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
