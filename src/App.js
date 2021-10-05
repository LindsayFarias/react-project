import './App.css';
import React from 'react';
import Drink from './Drink';
import NavBar from './NavBar';

//const url = "www.thecocktaildb.com/api/json/v1/1/"

//change to "classical" aka use class
class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className="App">
        <header>
          <NavBar drink={this.setState.drink} />
        </header>
        <main className="main-body">
          <Drink />
        </main>
      </div>
    );
  }
}

export default App;

// Starting with Create React App, make an app that includes:

// An API Call in a a Classical component at the top level - DONE
// Use fetch to make your API call - DONE
// Use componentDidMount and setState properly in conjunction - DONE
// At least 1 classical component (best practice - at the top level) - DONE
// At least 3 functional components - 1/3
// Some CSS styles for components
// At least 2 event handlers
// At least one form/field (somewhere a user types things or enters data)
// This data must be used somehow - to set state, to make an API call, etc.
// Components that nest to a depth of at least three components:
// Example: App > List > ListItem
// Passing a method that can affect the state of the top level component as props down to the lowest level component (e.g. in the example above, the ListItem would need to be able to use a method to change the state of App