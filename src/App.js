import './App.css';
import React from 'react';
import Drink from './Drink';
import NavBar from './NavBar';
import HomePage from './HomePage'
import ErrorPage from './Error'
import DrinkCarousel from './DrinkCarousel'
//const url = "www.thecocktaildb.com/api/json/v1/1/"

//change to "classical" aka use class
class App extends React.Component {
  constructor() {
    super();

    this.search = this.search.bind(this);
    this.getDrinks = this.getDrinks.bind(this);

    this.state = {
      // name: "",
      // ingredients: [],
      // instructions: "",
      // image: "",
      searchError: false,
      searchPhrase: "",
      lang: "",
      drinks: []
    }
  }

  search(drinkSearch) {
    console.log("Searching...", drinkSearch)
    this.getDrinks(drinkSearch, true)
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

    return json.drinks;
  }

  async getDrinks(drinkName, clearState = false) {

    let drinks = await this.getDrinkJson(drinkName)

    if (!drinks)
      return

    if (clearState === true) {
      this.setState({ drinks: [] });
    }

    //console.log("Drink", drink)
    for (let i = 0; i < drinks.length; i++) {

      let drink = {}

      drink.name = drinks[i].strDrink
      drink.image = drinks[i].strDrinkThumb
      drink.ingredients = []
      drink.instructions = drinks[i].strInstructions


      // let instructions

      // switch (this.state.lang) {
      //   case "": {
      //     instructions = drink.strInstructions
      //     break
      //   }
      //   case "DE": {
      //     instructions = drink.strInstructionsDE
      //     break
      //   }
      //   case "IT": {
      //     instructions = drink.strInstructionsIT
      //     break
      //   }
      // }


      for (let j = 1; j < 15; j++) {
        let ingredientName = "strIngredient" + j
        let measurementName = "strMeasure" + j

        if (drinks[i][ingredientName]) {
          drink.ingredients.push({ ingredient: drinks[i][ingredientName], measurement: drinks[i][measurementName] })
        }
      }

      //console.log(ingredients)s

      let newDrinks = this.state.drinks.concat([drink]);
      this.setState({ drinks: newDrinks })

      console.log(this.state.drinks)

      //this.setState({ name: name, ingredients: ingredients, instructions: instructions, image: image })
    }
  }

  render() {
    let result;
    if (this.state.searchError) {
      // We have a search error, show the error page
      result = <ErrorPage searchPhrase={this.state.searchPhrase} searchFunc={this.search} />
    } else if (this.state.drinks.length === 0) {
      result = <HomePage />
    } else {
      //result = <Drink name={this.state.name} ingredients={this.state.ingredients} instructions={this.state.instructions} image={this.state.image} lang={this.state.lang} />
      result = <DrinkCarousel drinks={this.state.drinks} />
    }
    return (
      <div className="App">
        <header>
          <NavBar app={this} searchFunc={this.search} randomDrinkFunc={this.getDrinks} />
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