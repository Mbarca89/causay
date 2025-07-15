import "./NavBar.css"
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { SplitHoverDropdown } from '../../CustomComponents/Dropdown/SplitHoverDropdown';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavDropdown } from "react-bootstrap";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                setIsScrolled(window.scrollY > 50);
            } else {
                setIsScrolled(true); // Fuerza modo scrolled en rutas distintas a "/"
            }
        };


        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Cleanup event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    // CSS class for text color - used consistently across all components
    const textColorClass = isScrolled ? 'nv-text-black' : 'nv-text-white';

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            fixed="top"
            style={{
                backgroundColor: isScrolled ? 'white' : 'transparent',
                backdropFilter: "blur(5px)",
                transition: 'background-color 0.3s ease',
                boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
            }}
        >
            <Container>
                <Navbar.Brand
                    onClick={() => {navigate("/"); setExpanded(false);}}
                    style={{
                        filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                    }}
                >
                    <img src="/images/logo.png" alt="" style={{ height: "75px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            className={textColorClass}
                           onClick={() => {navigate("/"); setExpanded(false);}}
                            style={{
                                filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))"
                            }}
                        >
                            Inicio
                        </Nav.Link>
                        <SplitHoverDropdown
                            title="Institucional"
                            customClassName={textColorClass}
                            link="institucional"
                            items={[
                                { label: 'Pilares', link: 'institucional/pilares' },
                                { label: 'Propuesta pedagógica', link: 'institucional/propuesta' },
                                { label: 'Normativa', link: 'institucional/normativa' },
                            ]}
                            onItemClick={() => setExpanded(false)}
                        />
                        <SplitHoverDropdown
                            title="Niveles"
                            customClassName={textColorClass}
                            link="niveles"
                            items={[
                                { label: 'Educación inicial', link: 'niveles/inicial' },
                                { label: 'Educación primaria', link: 'niveles/primaria' },
                                { label: 'Educación secundaria', link: 'niveles/secundaria' },
                            ]}
                            onItemClick={() => setExpanded(false)}
                        />
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/servicios"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Servicios
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/instalaciones"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Instalaciones
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/talleres"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Talleres
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/galeria"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Galeria
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/aranceles"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Aranceles
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/becas"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Becas
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/contacto"); setExpanded(false);}}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Contacto
                        </Nav.Link>
                        <NavDropdown
                            title="Acceder"
                            className={`nav-acceder ${textColorClass}`}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >

                            <NavDropdown.Item href="https://schoolnet.colegium.com/webapp/en_GB/login" target="blank">Acceso Alumnos</NavDropdown.Item>
                            <NavDropdown.Item href="https://causay.colegium.com/stwa/login.shtml" target="black">Acceso Docentes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar