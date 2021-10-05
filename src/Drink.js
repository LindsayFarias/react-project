import React from "react";
import Ingredients from "./Ingredients";

class Drink extends React.Component {
    constructor({ name, ingredients, instructions, image }) {
        super()
        this.state = {
            searchQuery: "",
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            image: image
        }
    }

    async componentDidMount() {
        // this.setState({})
        this.getDrink()
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
            <div className="drink">
                <div>Drink Name: {this.state.name}</div>
                <Ingredients ingredients={this.state.ingredients} />
                <p>Instructions: {this.state.instructions}</p>
                <div><img src={this.state.image}></img></div>
            </div>
        )
    }
}

export default Drink