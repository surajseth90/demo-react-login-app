import React from 'react'

export const ContactList = (props) => {

    const renderContacts = props.contacts.map((contacts) => {
        return (
            <div className="item">
                <div className="contents">
                    <div className="header">{contacts.name}</div>
                    <div >{contacts.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
});

return (
    <div className='ui celled list'>
        {renderContacts}
    </div>
)
}
