import React from 'react'
import Contacts from './Contacts';

import { useContactsContext } from '../context/ContactContext';

export default function contactsContainer() {
    return <useContactsContext.Provider>
        <Contacts></Contacts>
    </useContactsContext.Provider>
}