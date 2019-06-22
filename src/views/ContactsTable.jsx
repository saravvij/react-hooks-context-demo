import React from 'react'

// Presentational component
// We can even use useContext hook to get the contacts instead of getting it through props
export default function ContactsTable( { contacts }) {
    if (!contacts)
        return <div>No Contacts Found</div>

    return (
        <div>
          {
            contacts.map(contact => <div>{contact.id} - {contact.name} - {contact.email} </div>)
          }
        </div>
    );
}