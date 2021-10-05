import React from "react"
import Drink from "./Drink"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavBar = (props) => (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#">SDI 7's Drink Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Button variant="outline-success">Find Random Drink</Button>

                <Nav.Link href="#" disabled>
                    Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Enter Drink type"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar