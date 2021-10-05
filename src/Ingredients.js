import React, { useState } from "react"
import { ListGroup, ListGroupItem, Collapse } from "react-bootstrap"


const Ingredients = (props) => {
    const [open, setOpen] = useState(false);
    if (!props.ingredients) return <> </>
    else
        return (
            <div className="ingredient-list">
                <h4 onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Ingredients</h4>
                {/*      <Collapse in={open}> */}
                <ListGroup className="list-group-flush drink-card" >
                    {props.ingredients.map(ingredient => (
                        <ListGroupItem className="drink-card">
                            {`${!ingredient.measurement ? "" : ingredient.measurement + " of"} ${ingredient.ingredient}`}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                {/* </Collapse> */}
            </div>
        );
}

export default Ingredients

