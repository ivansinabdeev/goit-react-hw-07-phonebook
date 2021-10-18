import React, { useState } from "react";
import s from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/phonebook/phonebook-operations";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactNameId = uuidv4();
  const contactNumberId = uuidv4();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert(`Введите, пожалуйста, имя контакта. :)`);
      return;
    }

    if (number === "") {
      alert(`Введите, пожалуйста, номер телефона контакта. :)`);
      return;
    }

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.addContact} onSubmit={handleSubmit}>
      <label htmlFor={contactNameId}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={contactNameId}
        />
      </label>
      <label htmlFor={contactNumberId}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          id={contactNumberId}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
