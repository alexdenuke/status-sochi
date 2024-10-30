import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import logot from "../Asserts/logot.jpg";
import whatsup from "../Asserts/whatsup.svg";

const Styles = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    margin: 0;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link,
  a {
    font-size: large;
    padding: 6px;
    text-decoration: none;
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }

  button {
    text-decoration: none;
    font-size: large;
    padding: 6px;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }

  .menu-text {
    background-color: Transparent !important;
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function Header() {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavbarBrand className="fixednon">
          <Link to="/">
            <img
              className="fixednon"
              src={logot}
              alt="foto"
              style={{ height: "55px" }}
            />
          </Link>
        </NavbarBrand>

        <NavbarToggle aria-controls="responsive-navbar-nav" />

        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link className="mx-3" as={Link} to="/">
              Главная
            </Nav.Link> */}
            <Nav.Link className="mx-3" as={Link} to="/about">
              О нас
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/portfolio">
              Портфолио
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/partner">
              Партнеры
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/otziv">
              Видео
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/contact">
              Контакты
            </Nav.Link>
            <a className="mx-3" href="tel:+78002502838">
              8 800 250 28 38
            </a>
            <a
              className="mx-3"
              href="https://wa.me/79631612833"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="whatsup-icon" src={whatsup} alt="foto" />
            </a>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </Styles>
  );
}
