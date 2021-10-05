import React from "react"
import Drink from "./Drink.js"

const Ingredients = (props) => {
    if (!props.ingredients) return <> </>
    else
        return (
            <div className="ingredient-list">
                <p>Ingredients</p>
                <ul>
                    {props.ingredients.map(ingredient => (
                        <li>
                            {ingredient.ingredient + `-` + ingredient.measurement}
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default Ingredients




// const ComedianList = (props) => {
//     return (
//         <ul>
//             {props.people.map(person => (
//                 <li>
//                     <Person key={person.id} name={person.name} /> <button onClick={() => props.removeFavoriteComedian(person.id)}>DELETE</button>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// import React from 'react'
// import ComedianList from './ComedianList'

// const App = () => {
//     const favoriteComedians = [
//         { id: "dda4f542-8f47-4e77-83e7-038a5640d38d", name: "Dave Chappelle" },
//         { id: "1dd1e83b-17cc-4f21-8f23-68f804e1469d", name: "Louis C.K." },
//         { id: "de70eac1-8cfb-4930-8101-ac8c187cb134", name: "George Lopez" }
//     ]
//     return <ComedianList people={favoriteComedians} />

// }

// export default App