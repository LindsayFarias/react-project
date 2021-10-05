import React from "react"
import { Card, Container, Image } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container className="mx-auto my-5" >
            <Card className="drink-card">
                <Card.Body>
                    <Card.Text>
                        <h1>Are you ready to find the best drink ever?</h1>
                        <p>Click the "Find Random Drink" Button to be surprised.</p>
                        <p>Enter a drink by name and search how to make it.</p>
                    </Card.Text>
                    <Image className="shadow-lg p-3 mb-5 bg-light rounded" src="https://c.tenor.com/zFso1Q9MpYkAAAAC/dog-cocktail.gif" />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HomePage
// <div className="home-page">
//     <h1>Are you ready to find the best drink ever?</h1>
//     <p>Click Find Random Drink to be surprised.</p>
//     <p>Enter a drink by name and search how to make it.</p>
//     <img src="https://c.tenor.com/zFso1Q9MpYkAAAAC/dog-cocktail.gif" />
// </div>