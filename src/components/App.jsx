import Phonebook from './Phonebook/Phonebook';
import ContactBook from './Phonebook2/ContactBook';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'blokc',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Phonebook />
     
    </div>
  );
};
