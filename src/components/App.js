import './App.css';
import React from 'react';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'



function App() {

  const contacts = [
    {
      id:1 ,
      name:"iranga",
      email:"ira@gmail.com"
    },
    {
      id:2 ,
      name:"kamal",
      email:"kamal@gmail.com"
    },
    {
      id:3 ,
      name:"amal",
      email:"amal@gmail.com"
    }
  ];


  return (
    <div className="ui container">
        <Header/>
        <AddContact/>
        <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
