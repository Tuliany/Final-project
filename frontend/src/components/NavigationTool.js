import React from 'react'
import { Link } from "react-router-dom";
// import { Nav, Navbar, NavItem, NavLink, NavDropdown, InputGroup, Form, FormControl, Button } from "react-bootstrap";
import '../Style/NavigationTool.css'

export const NavigationTool = () => {

  return (




<nav id="navToggle">  
                <span></span>
                <span></span>
                <span></span>
  <a class="tab" data-text="PAGE ONE" href="./">HOME</a>
  <a class="tab" data-text="PAGE TWO" href="./about">ABOUT</a>
  <a class="tab" data-text="PAGE THREE" href="./feed">BLOG</a>
  <a class="tab" data-text="PAGE FOUR" href="./contact">CONTACT</a>
 

  <div class="dropdown">
    <button class="dropbtn">LOGIN / SIGNUP</button>
      <div class="dropdown-content">
          <a class="tab" href="./login" data-text="LOGIN / SIGN UP" id="user-btn">LOGIN  </a>
          <a class="tab" href="./signup" data-text="LOGIN / SIGN UP" id="user-btn"> SIGN UP </a>
      </div>
    </div>
</nav>

//     <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar sticky="top" />

//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="/login">Login</NavDropdown.Item>
//         <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
  )
}
