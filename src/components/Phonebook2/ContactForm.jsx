
import{ Component } from 'react'
class ContactForm extends Component {
        state = {
                name: '',
                number: '',
        } 
        handelChange = (event) => {
                const { name, value} = event.target;
                this.setState({[name]:value})
        }

        handelSubmit = (event) => {
                event.preventDefault();
                console.log('event :>> ', event);
                this.props.onSubmit(this.state.name, this.state.number);
                this.setState({name:'', number:''})
        }
        
        render() { 
                return (<form onSubmit={this.handelSubmit}>
                        <label>Name
                                <input type="text" name='name' value={this.state.name} onChange={this.handelChange} />
                        </label>
                        <label>Number
                                <input type="text"name='number' value={this.state.number} onChange={this.handelChange} />
                        </label>
                        <button>Add contact</button>
                </form>);
        }
}
 
export default ContactForm;