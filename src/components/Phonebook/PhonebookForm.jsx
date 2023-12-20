import { Component } from 'react';

class PhonebookForm extends Component {
  state = { name: '', phone: '' };
  handelChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.phone);
   
    this.reset();
  };
  reset = () => {
    this.setState({ name: '' });
    this.setState({ phone: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handelChange}
             
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handelChange}
            
            />
          </label>
          <button>Add contact</button>
        </form>
      </>
    );
  }
}

export default PhonebookForm;
