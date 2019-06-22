import React from 'react';
import './App.css';
import Counter from './views/Counter';
import ContactsContainer from './views/ContactsContainer';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr></hr>
      <ContactsContainer></ContactsContainer>
    </div>
  );
}

export default App;
