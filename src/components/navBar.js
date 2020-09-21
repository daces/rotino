import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav} from "react-bootstrap"
const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" className="navbar">
        {/* <Container> */}
         
        <Navbar.Toggle aria-controls="navbar__navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-center">
          <Nav className="" activeKey={pageInfo && pageInfo.pageName}>
            
          <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Home
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                About us
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Order Now
              </Nav.Link>
            </Link>
            
          </Nav>
          <Link to="/" className="navbar__link-no-style">
          <div className="navbar__title_theme_dark">Rotino</div>
        </Link>
          
          <Nav className="">
          <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Our menu
              </Nav.Link>
            </Link>
          <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Contact
              </Nav.Link>
            </Link>
          <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Gallery
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
