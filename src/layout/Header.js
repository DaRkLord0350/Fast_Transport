import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Header = (props) => {
  const navigate = useNavigate();

  const [flag, setflag] = useState(false);
  const [name, setname] = useState("");
  const [usertype, setusertype] = useState("");
  useEffect(() => {
    if (localStorage.getItem("userdata") !== null) {
      setflag(true);
      setname(JSON.parse(localStorage.getItem("userdata")).name);
      if (JSON.parse(localStorage.getItem("userdata")).isTransporter == true)
        setusertype("transporter");
      else if (JSON.parse(localStorage.getItem("userdata")).isAdmin == true)
        setusertype("admin");
      else setusertype("user");
    }
  }, []);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className=" fixed-top bg-gradient "
      style={{ height: "60px" }}
    >
      <Container fluid>
        <Navbar.Brand href="/home" >
          <img
            src="logo.png"
            width="200"
            height="50"
            className="d-inline-block align-top"
            
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="/home">HOME</Nav.Link>

            <Nav.Link href="/Contactus">CONTACT</Nav.Link>
            <Nav.Link href="/terms"> ABOUT US</Nav.Link>
          </Nav>
          {flag ? (
            <>
              {" "}
              <Form className="d-flex me-4">
                {usertype == "user" ? (
                  <Nav.Link href="/customerhome">DashBoard</Nav.Link>
                ) : usertype == "transporter" ? (
                  <Nav.Link href="/transporterhome">DashBoard</Nav.Link>
                ) : (
                  <Nav.Link href="/adminhome">DashBoard</Nav.Link>
                )}
              </Form>
              <Form className="d-flex me-4">
                <Button
                  type="submit"
                  variant="outline-warning"
                  onClick={() => {
                    localStorage.clear();
                    localStorage.setItem('isLoggedIn','false');
                   
                    navigate("/login");
                  }}
                >
                  LOGOUT
                </Button>
              </Form>
              <br></br>
              <p className="text-white pt-2 ">
                Welcome,
                <br />
                <h2 className="badge bg-danger">
                  <span className="">{name}</span>
                </h2>
              </p>
            </>
          ) : (
            <>
              {" "}
              <Form className="d-flex me-4">
                <Button type="submit" variant="outline-warning">
                  <Link to="/Login" className="nav-links">
                    LOGIN
                  </Link>
                </Button>
              </Form>
              <Form className="d-flex me-4">
                <Button type="submit" variant="outline-warning">
                  <Link to="/CustomerReg" className="nav-links">
                    REGISTER
                  </Link>
                </Button>
              </Form>
            </>
          )}

          <br></br>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
