import './App.css';
import React,{useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import {ContactList} from './ContactList';

function App() {
  
  const[contacts,setContacts] = useState([]);

  const addContactHandler =(contact)=>{
    setContacts([...contacts,contact]);
  }
  return (
    <>
    <Header />
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
