import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//without using JSX

const withoutjsx = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "This is h1 heading"),
  React.createElement("h2", {}, "This is h2 heading"),
  React.createElement("h3", {}, "This is h3 heading"),
]);

//const root = createRoot(document.getElementById("withoutjsx"));
//root.render(withoutjsx);

//using JSX

const withjsx = (
  <div id="title">
    <h1>This is h1 heading</h1>
    <h2>This is h2 heading</h2>
    <h3>This is h3 heading</h3>
  </div>
);

//const rootjsx = createRoot(document.getElementById("usingjsx"));
//rootjsx.render(withjsx);

//using functional components

const Funcomp = () => {
  return (
    <div id="title">
      <b id="head1">Inside Child component</b>
      <h1>This is h1 heading</h1>
      <h2>This is h2 heading</h2>
      <h3>This is h3 heading</h3>
    </div>
  );
};

//const rootfuncomp = createRoot(document.getElementById("FComp"));
//rootfuncomp.render(Funcomp);

const Seconcomp = () => {
  return (
    <div id="demo">
      <h1>Inside main container of application</h1>
      <Funcomp />
      {/* {withoutjsx} */}
    </div>
  );
};

//const compincomp = createRoot(document.getElementById("Compincomp"));
//compincomp.render(<Seconcomp />);

// Create HeaderComponent with functional components in reactjs using react-bootstrap

function HeaderComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <img
        alt="Food Junction"
        className="imgfJ"
        src="https://pbs.twimg.com/profile_images/870963644254662656/FH_4Qh8o_400x400.jpg"
        height="60px"
        width="60px"
      ></img>
      <Container fluid>
        <Navbar.Brand href="#">Food Junction</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Header = createRoot(document.getElementById("Header"));
Header.render(<HeaderComponent />);
