
import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";




export default function App() {
  let fiveContacts = contacts.slice(0, 5);
  const [contactsArr, updateContacts] = useState(fiveContacts)
  
  const randomContact = () => {
    const leftPoolContact = contacts.filter(
      (contact) => !contactsArr.includes(contact)
    );
    let randomContact =
    leftPoolContact[Math.floor(Math.random() * leftPoolContact.length)];
    updateContacts([...contactsArr, randomContact]);
  };
  
  const sortPopularity = () => {
    const newArr = JSON.parse(JSON.stringify(contactsArr));
    const contactsSort = newArr.sort((a, b) =>
      a.popularity > b.popularity ? -1 : 1
    );
    updateContacts(contactsSort);
  };

  const sortName = () => {
    const newArr = JSON.parse(JSON.stringify(contactsArr));
    const contactsSort = newArr.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    updateContacts(contactsSort);
  };
  

  return (
    <div class="iron-contacts">
    <h1>Iron Contacts</h1>
    <button class="buttonContacts" onClick={randomContact}>Add Random Contact</button>
    <button class="buttonContacts" onClick={sortPopularity}>Sort by popularity</button>
    <button class="buttonContacts" onClick={sortName}>Sort by name</button>
    <table class="tableContacts">
      
      <tr>
        <th class="tableHeader">Picture</th>
        <th class="tableHeader">Name</th>
        <th class="tableHeader">Popularity</th>
        <th class="tableHeader">Won<br/>Oscar</th>
        <th class="tableHeader">Won<br/>Emmy</th>
        <th class="tableHeader">Actions</th>
      </tr>
      {contactsArr.map((contact) => {
        return (
          <tr>
            <td><img class="promiImage" src={contact.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{(contact.popularity).toFixed(2)}</td>
            <td>{contact.wonOscar?"🏆": ""}</td>
            <td>{contact.wonEmmy?"🏆": ""}</td>
            {/* <td><button onClick={contact.id}>Delete</button> </td> */}
          </tr>
        )
      })
      }
    </table>
</div>
  )
}



