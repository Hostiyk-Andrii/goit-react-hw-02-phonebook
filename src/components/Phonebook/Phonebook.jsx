import { Component } from 'react';
import PhonebookForm from './PhonebookForm';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter';

// import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };
  handelSubmit = (name, phone) => {
    const contacts = {
      name,
      phone,
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
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const visibleContacts = this.getVisibleContact();
    return (
      <>
        <PhonebookForm onSubmit={this.handelSubmit} />

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <h3>Contacts</h3>
        <Contacts onContact={visibleContacts} />
      </>
    );
  }
}

export default Phonebook;
