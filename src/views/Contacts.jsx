import React from 'react'
import AddContact from './AddContact';
import ContactsTable from './ContactsTable';
import { useContactsContext } from '../context/ContactContext';

export default function Contacts() {
    const { contacts } = useContactsContext();
    return (
        <React.Fragment>
            <AddContact></AddContact>
            <ContactsTable contacts={contacts}></ContactsTable>
        </React.Fragment>
    );
}


