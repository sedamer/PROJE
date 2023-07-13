import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/images/github.svg';
import navIcon2 from '../assets/images/instagram.svg';
import navIcon3 from '../assets/images/linkedin.svg';
import navIcon4 from '../assets/images/icons8-gmail-logo.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#aboutme"
                className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('aboutme')}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#education"
                className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('education')}
              >
                Education
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#blog"
                className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('blog')}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('contact')}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="#"><img src={navIcon4} alt="" /></a>

              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}