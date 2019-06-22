import React, { useState } from 'react'
import { useContactsContext } from '../context/ContactContext'

// Another approach is, get the addContact throug props instead of getting it through useContactsContext here
export default function AddContact() {
    const [ contact, setContact ] = useState('');
    const { addContact } = useContactsContext();
    return (
        <div>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}/>
            <button onClick={() => addContact(contact, contact)}>Add</button>
        </div>
    );
}