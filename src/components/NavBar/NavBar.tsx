import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    const [navBackground, setNavBackground] = useState('transparent');
    const [navTextColor, setNavTextColor] = useState('white');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBackground('white');
                setNavTextColor('black');
            } else {
                setNavBackground('transparent');
                setNavTextColor('white');
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            style={{
                backgroundColor: navBackground,
                backdropFilter: "blur(5px)",
                transition: 'background-color 0.3s ease',
                boxShadow: navBackground === 'white' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
            }}
        >
            <Container>
                <Navbar.Brand
                    href="/"
                    style={{
                        color: navTextColor,
                        filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                    }}
                >
                    <img src="/images/logo.png" alt="" style={{height:"75px"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            style={{
                                color: navTextColor,
                                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                            }}
                        >
                            Inicio
                        </Nav.Link>
                        <NavDropdown
                            title="Institucional"
                            id="basic-nav-dropdown"
                            style={{
                                '--bs-nav-link-color': navTextColor,
                                '--bs-navbar-color': navTextColor,
                                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                            }}
                        >
                            <NavDropdown.Item href="#services/web">Pilares</NavDropdown.Item>
                            <NavDropdown.Item href="#services/mobile">Propuesta pedagógica</NavDropdown.Item>
                            <NavDropdown.Item href="#services/mobile">Normativa</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Niveles"
                            id="basic-nav-dropdown"
                            style={{
                                '--bs-nav-link-color': navTextColor,
                                '--bs-navbar-color': navTextColor,
                                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                            }}
                        >
                            <NavDropdown.Item href="#services/web">Educación inicial</NavDropdown.Item>
                            <NavDropdown.Item href="#services/mobile">Ecucacicón primaria</NavDropdown.Item>
                            <NavDropdown.Item href="#services/mobile">Ecucacicón secundaria</NavDropdown.Item>
                            <NavDropdown.Item href="#services/mobile">Ecucacicón superior</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="#contact"
                            style={{ color: navTextColor,filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Servicios
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            style={{ color: navTextColor,filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Instalaciones
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            style={{ color: navTextColor,filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Talleres
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            style={{ color: navTextColor,filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Aranceles
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            style={{ color: navTextColor,filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Becas
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            style={{ color: navTextColor,filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Contacto
                        </Nav.Link>
                        <NavDropdown
                            title="Acceder"
                            id="basic-nav-dropdown"
                            style={{
                                '--bs-nav-link-color': navTextColor,
                                '--bs-navbar-color': navTextColor,
                                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                            }}
                        >
                            <NavDropdown.Item href="#services/web">Acceso Alumnos</NavDropdown.Item>
                            <NavDropdown.Item href="#services/mobile">Acceso Docentes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar