import React from 'react'

export const ContactCard = (props) => {
    const {name,email}=props.contact;
    return (
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div >{email}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
    </div>
    )
}
