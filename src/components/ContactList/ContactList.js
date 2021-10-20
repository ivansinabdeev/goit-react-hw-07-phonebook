import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";
import * as operations from "../../redux/phonebook/phonebook-operations";

import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(operations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
