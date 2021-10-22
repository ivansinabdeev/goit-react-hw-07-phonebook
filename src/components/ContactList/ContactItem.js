import React from "react";
import PropTypes from "prop-types";

import s from "./ContactList.module.css";

const ContactListItem = ({ name, number, id, onDeletContact }) => {
  return (
    <li>
      <p>
        {" "}
        {name}: {number}
      </p>
      <button
        type="button"
        className={s.buttonDelete}
        onClick={() => onDeletContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactListItem;
