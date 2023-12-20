import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Filter from 'components/Phonebook/Filter';

class ContactBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmit = (name, number) => {
    const contacts = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [contacts, ...prevState.contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  getVisibleContact = () => {
    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contact.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const vbisibleContacts = this.getVisibleContact();
    return (
      <>
        <h3>PhoneBook</h3>
        <ContactForm onSubmit={this.formSubmit} />

        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h3>Contacts</h3>
        <ContactList onContact={vbisibleContacts} />
      </>
    );
  }
}

export default ContactBook;
