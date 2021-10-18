import s from "./ContactList.module.css";
import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({
  contactName,
  contactNumber,
  onClickDeleteContact,
}) => {
  return (
    <li>
      {contactName} : {contactNumber}
      <button
        className={s.buttonDelete}
        type="button"
        onClick={onClickDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
