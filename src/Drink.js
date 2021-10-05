import React from "react";
import Ingredients from "./Ingredients";

const Drink = ({ name, ingredients, instructions, image }) => {
    return (
        <div className="drink">
            <div>Drink Name: {name}</div>
            <Ingredients ingredients={ingredients} />
            <p>Instructions: {instructions}</p>
            <div><img src={image}></img></div>
        </div>
    )
}

export default Drink