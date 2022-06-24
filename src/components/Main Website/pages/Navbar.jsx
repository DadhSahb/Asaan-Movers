import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Imglogo from "../img/logo/logoasaan.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function NavBar() {
  const [me, setMe] = useState([]);
  const token = localStorage.getItem("customer-auth-token");

  const getMe = async () => {
    await axios
      .get("http://localhost:5000/api/customers/me", {
        headers: { "customer-auth-token": token },
      })
      .then((response) => {
        setMe(response.data);
      });
  };
  useEffect(() => {
    getMe();
  }, []);

  return (
    <Navbar className="navibar sticky-nav" bg="dark" expand="lg">
      <Container className="list">
        <Navbar.Brand className="logo">
          <Link to="/">
            <img
              src={Imglogo}
              width="130"
              height="60"
              className="logo d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto">
            <Nav.Link>
              <Link to="/" className="linkk">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services" className="linkk">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="linkk">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="linkk">
                Contact
              </Link>
            </Nav.Link>
            <div className="header-right-btn">
              <a className="btnn">
                <Link
                  to={me.name ? "/user/logout" : "/userlogin"}
                  className="btnn"
                >
                  {me.name ? "Logout" : "Sign In"}
                </Link>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
