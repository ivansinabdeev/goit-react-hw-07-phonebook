import ContactForm from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Title from "./components/Title/Title";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
