import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import * as contactsActions from "../../redux/phonebook/phonebook-actions";

import PropTypes from "prop-types";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
