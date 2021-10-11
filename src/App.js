import './App.css';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container/Container';

class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: ''
  };

//writing data from input
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  //collecting and forwarding data to obj
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number
    };
 
    this.setState((prevState) => {
      return {
        contacts: [ contact, ...prevState.contacts]
      }
    });
    this.resetForm();
   };

  // handleSubmit = data => {
  //   this.setState(prevState => {
  //     if (
  //       prevState.contacts.some(contact => contact.name.includes(data.name))
  //     ) {
  //       return alert(`${data.name} is already in contacts!`);
  //     }

  //     return { contacts: [data, ...prevState.contacts] };
  //   });
  // };

  //clears inputs. Used in handleSubmit
  resetForm = () => {
    this.setState({ name: '', number: '' })
  };

  nameId = uuid();
  numberId = uuid();

  render() {
    console.log('state', this.state.name)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>👤 Name
            <input
            id={this.nameId}
            type="text"
              name="name"
              value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            />
          </label>

          <label htmlFor={this.numberId}>☎️ Number
            <input
              id={this.numberId}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              maxLength="14"
              title="номер телефона может быть только в числовом формате"
              required
            />
          </label>
          <button type="submit" onSubmit={this.handleSubmit}>Add contact</button>

        </form>
        <Container>
            <ContactList
            contacts={this.state.contacts}
            />
        </Container>


      </div>
    )
  }
};

export default App;