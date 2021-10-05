import React from "react";
import Ingredients from "./Ingredients";
import { Card, Row, Col, Container } from "react-bootstrap";

const Drink = ({ name, ingredients, instructions, image }) => {
    return (
        <Container className="mx-auto my-5" >
            <Card style={{ width: '50' }} className="drink-card">
                <Row className="mx-0">
                    <Col className="mx-0 px-0">
                        <Card.Img className="card-img" src={image} />
                    </Col>
                    <Col className="mx-0">
                        <Card.Body>
                            <Card.Title><h2>{name}</h2></Card.Title>

                        </Card.Body>
                        <Ingredients ingredients={ingredients} />
                        <h4>Instructions</h4>
                        <Card.Text>
                            {instructions}
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default Drink

{/* <div className="drink">
<div>Drink Name: {name}</div>

<p>Instructions: {instructions}</p>
<div><img src={image}></img></div>
</div> */}