import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import Container from "react-bootstrap/Container";
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", handleColor);
  return (
    <Navbar
      className={color ? "navbar navbar-bg" : "navbar"}
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href="home" className="logo">
        <img
          className="logo"
          src="src\assets\netflix_logo.svg"
          width="145"
          height="50"
          alt=""
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#shows">TV Shows</Nav.Link>
        <Nav.Link href="#movies">Movies</Nav.Link>
        <Nav.Link href="#n&p">New & Popular</Nav.Link>
        <Nav.Link href="#mylist">My List</Nav.Link>
        <Nav.Link href="#languages">Browse by Languages</Nav.Link>
      </Nav>

      <Nav className="ms-auto navbar-right">
        <Nav.Link href="#home">Search</Nav.Link>
        <Nav.Link href="#shows">Kids</Nav.Link>
        <Nav.Link href="#movies">Notification</Nav.Link>
        <Nav.Link href="#n&p">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
