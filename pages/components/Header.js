import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Button from "@mui/material/Button";

import fetch from "isomorphic-unfetch";
import useSWR from "swr";

import cookie from "js-cookie";
import { session } from "next-auth/client";

export default function Header() {
  const { data, revalidate } = useSWR("/api/me", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data)
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Solid Cherry Heirlooms</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>
                  <NavDropdown.Item href="/woods">Woods</NavDropdown.Item>
                  <NavDropdown.Item href="/privacy">
                    Privacy Policy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contact">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Solid Cherry Heirlooms</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/woods">Woods</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <h2>Welcome {session.user.name}</h2>
      </Navbar>
    </div>
  );
}
