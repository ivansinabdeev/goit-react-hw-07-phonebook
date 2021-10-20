import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilterValue = (state) => state.contacts.filter;

export const getFilteredContactList = createSelector(
  [getContacts, getFilterValue],
  (allContacts, filter) => {
    const regExp = new RegExp(filter, "gi");

    if (filter) {
      return allContacts.filter((contact) => regExp.test(contact.name));
    }
    return allContacts;
  }
);
