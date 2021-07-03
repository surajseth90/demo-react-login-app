import React from 'react'
import { ContactCard } from './ContactCard';

export const ContactList = (props) => {

    const renderContacts = props.contacts.map((contact) => {
        return (
          <ContactCard contact={contact}></ContactCard> 
        );
});

return (
    <div className='ui celled list'>
        {renderContacts}
    </div>
)
}
