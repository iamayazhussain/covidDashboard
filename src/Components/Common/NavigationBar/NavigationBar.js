import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                <div className="header_left">
                  <ul className="header_ul">
                    <li>
                      <a href="https://islengg.ac.in">
                        <span className="fa fa-phone"></span> 040 - 12345678
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">ALUMNI</a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">E-MAIL</a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">ONLINE FEE</a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">CONTACT</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="header_right">
                  <ul className="header_ul">
                    <li>
                      <a href="https://islengg.ac.in">
                        Follow us<span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">
                        <span className="fa fa-linkedin-square"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://islengg.ac.in">
                        <span className="fa fa-youtube-play"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.ibb.co/Y8CMrvd/isl-Logo-Desktop.png"
            width="200"
            height="50"
            className="img-fluid"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="order-first"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#blog" as={Link} to="/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" as={Link} to="/features">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/blog">
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Link>
            <NavDropdown title="Department" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" as={Link} to="/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/rnd">
              <Nav.Link href="#rnd">R & D</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
