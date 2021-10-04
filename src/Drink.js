import React from "react";

class Drink extends React.Component {
    constructor({ name, ingredients, instructions, image }) {
        super()
        this.state = {
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            image: image
        }
    }

    async componentDidMount() {
        this.getRandomDrink()
    }

    async getRandomDrink() {
        let result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        console.log("Result", result)
        let json = await result.json()
        console.log("JSON", json.drinks[0].strDrink)

        let drink = json.drinks[0];

        let name = drink.strDrink
        let ingredients = {}
        let instructions = drink.strInstructions
        let image = drink.strDrinkThumb

        this.setState({ name: name, ingredients: ingredients, instructions: instructions, image: image })
    }


    render() {
        return (
            <div className="drink">
                <div>Drink Name: {this.state.name}</div>
                <p>Instructions: {this.state.instructions}</p>
                <div><img src={this.state.image}></img></div>
            </div>
        )
    }
}

export default Drink