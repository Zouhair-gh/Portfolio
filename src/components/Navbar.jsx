import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-country-flag";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ transition: "background-color 0.3s" }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            {/* New Certificate/Certificat Button */}
            <Nav.Item>
              <Nav.Link as={Link} to="/certificate" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.certificate")}
              </Nav.Link>
            </Nav.Item>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="language-dropdown"
              >
                {i18n.language === "en" ? (
                  <CountryFlag countryCode="GB" svg style={{ width: "24px", height: "24px" }} />
                ) : (
                  <CountryFlag countryCode="FR" svg style={{ width: "24px", height: "24px" }} />
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  <CountryFlag countryCode="GB" svg style={{ width: "24px", height: "24px", marginRight: "5px" }} />
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("fr")}>
                  <CountryFlag countryCode="FR" svg style={{ width: "24px", height: "24px", marginRight: "5px" }} />
                  Français
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .navbar {
          background-color: transparent;
          transition: background-color 0.3s;
        }
        .sticky {
          background-color: rgba(255, 255, 255, 0.9);
        }
        .language-dropdown {
          display: flex;
          align-items: center;
          border: none;
          background-color: transparent;
          padding: 0.5rem 1rem;
          font-size: 16px;
          color: #343a40;
          cursor: pointer;
          height: 100%; /* Ensure dropdown matches height of navbar items */
        }
        .language-dropdown:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .dropdown-menu {
          min-width: 100px;
          padding: 0; /* Remove padding to align with navbar */
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          color: #343a40;
        }
        .dropdown-item:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;
