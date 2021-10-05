import './App.css';
import React from 'react';
import Drink from './Drink';
import NavBar from './NavBar';
import HomePage from './HomePage'
import ErrorPage from './Error'
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
      image: "",
      searchError: false,
      searchPhrase: ""
    }
  }

  search() {
    let drinkSearch = document.getElementById("drinkSearch")
    console.log("Searching...", drinkSearch.value)
    this.getDrink(drinkSearch.value)
  }

  async getDrinkJson(drinkName) {
    let result

    if (!drinkName) {
      result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    } else {
      result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName)
    }

    //console.log("Result", result)
    let json = await result.json()
    //console.log("JSON", json.drinks[0].strDrink)

    if (!json.drinks) {
      this.setState({ searchError: true, searchPhrase: drinkName })
      return
    } else {
      this.setState({ searchError: false })
    }

    return json.drinks[0];
  }

  async getDrink(drinkName) {

    let drink = await this.getDrinkJson(drinkName)

    if (!drink)
      return

    //console.log("Drink", drink)

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

    //console.log(ingredients)

    this.setState({ name: name, ingredients: ingredients, instructions: instructions, image: image })
  }

  render() {
    let result;
    if (this.state.searchError) {
      // We have a search error, show the error page
      result = <ErrorPage searchPhrase={this.state.searchPhrase} searchFunc={this.search} />
    } else if (this.state.name === "") {
      result = <HomePage />
    } else {
      result = <Drink name={this.state.name} ingredients={this.state.ingredients} instructions={this.state.instructions} image={this.state.image} />
    }
    return (
      <div className="App">
        <header>
          <NavBar app={this} searchFunc={this.search} randomDrinkFunc={this.getDrink} />
        </header>
        <main className="main-body">
          {result}
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