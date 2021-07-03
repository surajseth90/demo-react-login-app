import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import {ContactList} from './ContactList';

function App() {
  
  const contacts=[
    {
      id:"1",
      name:"Suraj",
      email:"suraj@gmail.com"
    },
    {
      id:"2",
      name:"Sonali",
      email:"suraj@gmail.com"
    }
  ]
  return (
    <>
    <Header />
    <AddContact/>
    <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
