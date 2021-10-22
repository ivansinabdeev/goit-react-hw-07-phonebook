import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactForm from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import contactsOperations from "./redux/phonebook/phonebook-operations";
// import Loader from "react-loader-spinner";
import { isContactLoading } from "./redux/phonebook/phonebook-selectors";
import s from "./App.css";

const App = () => {
  const isLoadingContacts = useSelector(isContactLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts}
      <ContactList />
    </div>
  );
};

export default App;

// import ContactForm from "./components/Form/Form";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
// import Title from "./components/Title/Title";
// import "./App.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Title title="Phonebook" />
//       <ContactForm />
//       <Title title="Contacts" />
//       <Filter />
//       <ContactList />
//     </div>
//   );

// }
