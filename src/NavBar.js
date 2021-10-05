import React from "react"
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

const NavBar = (props) => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand>SDI 7's Drink Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Button className="mx-1" onClick={() => { props.app.setState({ name: "", searchError: false }) }} variant="outline-success" >Home</Button>
                        <Button className="mx-1" onClick={() => { props.randomDrinkFunc() }} variant="outline-success">Find Random Drink</Button>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search by Drink Name"
                            className="me-2"
                            aria-label="Search"
                            id="drinkSearch"
                            ref={props.searchRef}
                        />
                        <Button onClick={() => { props.searchFunc() }} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar