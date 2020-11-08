import React, { Component } from 'react';
import styles from './App.module.css';
//import styled from 'styled-components';
import Person from './components/Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import Radium, {StyleRoot} from 'radium';

/*const StyledButton = styled.button`
      border: 1px solid grey;
      background-color: ${props => props.alt ? 'blue' : 'yellow'};
      padding: 12px;
      cursor:pointer;
      &:hover{
        background-color: brown;
      }      
`;*/


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  //switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    //this.setState( {
    //  persons: [
      //  { name: newName, age: 28 },
       // { name: 'Manu', age: 29 },
       // { name: 'Stephanie', age: 27 }
      //]
    //} )
  //}

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.state({persons: persons});

    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    //const style = {
      //      }
    //};

    let persons = null;

    if(this.state.showPersons){
      persons =  (
        <div>
          {this.state.persons.map((person,index) => {
            return <ErrorBoundary key={person.id}><Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}      
         
         </div>

      )
      //style.backgroundColor = 'red';
      //style[':hover']={
      //  backgroundColor: 'purple'
      //}
    }

    const assClasses = [];
    if(this.state.persons.length  <= 2){
      assClasses.push('styles.blue');
    }

    if(this.state.persons.length  <= 1){
      assClasses.push('styles.uppercase');
    }

    return (
    
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assClasses.join(' ')}>This is really working!</p>
        <button className={styles.button} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
