import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import contactsReducers from "./phonebook/phonebook-reducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
