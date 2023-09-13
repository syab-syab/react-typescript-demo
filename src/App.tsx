import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import LoggedIn from './components/state/LoggedIn';

function App() {
  const personName = {
    first: "Tony",
    last: "Stark"
  }

  const nameList = [
    {
      first: "Tony",
      last: "Stark"
    },
    {
      first: "Peter",
      last: "Parker"
    },
    {
      first: "Natasha",
      last: "Romanoff"
    }
  ]
  return (
    <div className="App">
      <Greet name="Randy Rhoads" messageCount={20} isLoggedIn={true} />
      
      <Person name={personName} />
      
      <PersonList names={nameList} />
      
      <Status status='loading' />
      
      <Oscar>
        <Heading>Oscar goes to Brad Pitt!</Heading>
      </Oscar>
      <Greet name="Zakk Wylde" isLoggedIn={true} />
      
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />
      
      <Input value='' handleChange={(event) => console.log(event)} />
      
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      <LoggedIn />
    </div>
  );
}

export default App;
