import {Component} from 'react'
import { PhonebookForm } from './PhonebookForm';
export class Phonebook extends Component {
     
  render() {
          return (
            <>
              <h1>Phonebook</h1>
              <div>
                <PhonebookForm />
              </div>
            </>
          );
  }
}