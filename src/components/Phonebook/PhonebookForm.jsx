import { Component } from 'react';

export class PhonebookForm extends Component {
  state = {
    contacts: [],
    name: '',
  };
    handelChangeName = event => {
      this.setState({ name: event.target.value });
    };
 
//   handelChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };
  hendelSubmit = event => {
    event.preventDefault();
    this.setState({ name: ''});
  };
  render() {
    return (
      <form onSubmit={this.hendelSubmit}>
        <div>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              onChange={this.handelChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
