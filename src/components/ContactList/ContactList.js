import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactListItem from "./ContactItem";
import contactsOperations from "../../redux/phonebook/phonebook-operations";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeletContact = (id) => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeletContact={() => onDeletContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
