import './App.css';
import React from 'react';
import Drink from './Drink';
import NavBar from './NavBar';

//const url = "www.thecocktaildb.com/api/json/v1/1/"

//change to "classical" aka use class
class App extends React.Component {
  constructor() {
    super();

    this.search = this.search.bind(this);
    this.getDrink = this.getDrink.bind(this);

    this.state = {
      name: "",
      ingredients: [],
      instructions: "",
      image: ""
    }
  }

  async componentDidMount() {
    this.getDrink()
  }

  search() {
    let drinkSearch = document.getElementById("drinkSearch")
    console.log("Searching...", drinkSearch.value)
    this.getDrink(drinkSearch.value)
  }

  async getDrink(drinkName) {
    let result = {}
    if (!drinkName) {
      result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    } else {
      result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName)
    }

    console.log("Result", result)
    let json = await result.json()
    console.log("JSON", json.drinks[0].strDrink)

    let drink = json.drinks[0];

    let name = drink.strDrink
    let ingredients = []
    let instructions = drink.strInstructions
    let image = drink.strDrinkThumb

    for (let i = 1; i < 15; i++) {
      let ingredientName = "strIngredient" + i
      let measurementName = "strMeasure" + i

      if (drink[ingredientName]) {
        ingredients.push({ ingredient: drink[ingredientName], measurement: drink[measurementName] })
      }
    }

    console.log(ingredients)

    this.setState({ name: name, ingredients: ingredients, instructions: instructions, image: image })
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar searchFunc={this.search} randomDrinkFunc={this.getDrink} />
        </header>
        <main className="main-body">
          <Drink name={this.state.name} ingredients={this.state.ingredients} instructions={this.state.instructions} image={this.state.image} />
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
// At least 3 functional components - DONE
// Some CSS styles for components (bootstrap....?)
// At least 2 event handlers - DONE
// At least one form/field (somewhere a user types things or enters data) - DONE
// This data must be used somehow - to set state, to make an API call, etc. - DONE
// Components that nest to a depth of at least three components: DONE
// Example: App > List > ListItem
// Passing a method that can affect the state of the top level component as props down to the lowest level component (e.g. in the example above, the ListItem would need to be able to use a method to change the state of App