import React from "react"
import { Card, Container, Image, Button } from "react-bootstrap";

const ErrorPage = ({ searchPhrase, searchFunc }) => {

    let drinks = ["Margarita", "Daiquiri", "Pina Colada", "Grass Skirt", "Gluehwein", "B-52", "Mango Mojito"]
    let randomDrink = drinks[Math.floor(Math.random() * drinks.length)]

    return (
        <Container className="mx-auto my-5" >
            <Card className="drink-card">
                <Card.Body>
                    <Card.Text>
                        <h1>Oops, we couldn't find {searchPhrase}!</h1>
                        <h3>You should try to search for a <a onClick={() => searchFunc(randomDrink)} className="btn btn-success">{randomDrink}</a>, it sounds delicious.</h3>
                    </Card.Text>
                    <Image className="shadow-lg p-3 mb-5 bg-light rounded" src="https://c.tenor.com/bgbgJ8tpK0AAAAAM/dog-crying.gif" />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ErrorPage
