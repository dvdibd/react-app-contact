import React, { useState, useEffect} from "react";
import axios from "axios";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setContacts(response.data);
    });
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseClick = () => {
    setSelectedContact(null);
  };

  return (
    <div className="app">
        
        <div className="right">
            <div className="contact-list">
                <div >
                <h1 className="font-bold contact">Contacts</h1>
                </div>
                <ul className="list-none">
                {contacts.map((contact) => (
                    
                    <li
                    key={contact.id}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={() => handleContactClick(contact)}
                    >
                    <p className="contact-box ">{contact.name}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        {selectedContact && (
            <div className="contact-disp left">
                <button className="close-btn" onClick={handleCloseClick}>
                X
                </button>
                <div className="content-rest">
                    <h2 className="font-bold ">{selectedContact.name}</h2>
                    
                    <p className="" >{selectedContact.email}</p>
                    <div className="divider"></div>
                    <p className="">{selectedContact.phone}</p>
                    <div className="divider"></div>
                    <p className="">Website: {selectedContact.website}</p>
                </div>
            </div>
        )}
        
    </div>
  );
};

export default Contacts;
