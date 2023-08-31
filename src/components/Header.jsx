import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <header>
      
        <Navbar bg='dark' variant='dark' collapseOnSelect>
            <Container>
            <LinkContainer to="/>">
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
            </LinkContainer>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                        <Nav.Link><FaShoppingCart/> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="login">
                        <Nav.Link><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
                       
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
