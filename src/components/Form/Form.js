import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";
import { addContact } from "../../redux/phonebook/phonebook-operations";

import s from "./Form.module.css";

function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact(name, number));

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactCheck = () => {
    const namesIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      []
    );
    const numbersIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      []
    );

    if (namesIsIn.includes(name) || numbersIsIn.includes(number)) {
      alert(`${name}${number} Already exist`);
    }

    if (name === "" || number === "") {
      alert("Not enough data");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setNumber("");
    if (contactCheck()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form className={s.addContact} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Вася Пупкин"
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </label>

      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="+123456789"
          onChange={(event) => setNumber(event.currentTarget.value)}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
