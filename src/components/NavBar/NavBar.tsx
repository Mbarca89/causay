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
                backdropFilter: "blur(10px)",
                transition: 'background-color 0.3s ease',
                boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
            }}
        >
            <Container>
                <Navbar.Brand
                    onClick={() => {navigate("/"); setExpanded(false);}}
                    style={{
                        filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, .5))"
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
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                           onClick={() => {navigate("/noticias"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Noticias
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
                            isScrolled={isScrolled}
                        />
                        <SplitHoverDropdown
                            title="Niveles"
                            customClassName={textColorClass}
                            link="niveles"
                            items={[
                                { label: 'Educación inicial', link: 'niveles/inicial' },
                                { label: 'Educación primaria', link: 'niveles/primaria' },
                                { label: 'Educación secundaria', link: 'niveles/secundaria' },
                                 { label: 'Educación superior', link: 'niveles/superior' },
                            ]}
                            onItemClick={() => setExpanded(false)}
                            isScrolled={isScrolled}
                        />
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/servicios"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Servicios
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/instalaciones"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Instalaciones
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/talleres"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Talleres
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/galeria"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Galeria
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/aranceles"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Aranceles
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/becas"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Becas
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => {navigate("/contacto"); setExpanded(false);}}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
                        >
                            Contacto
                        </Nav.Link>
                        <NavDropdown
                            title="Acceder"
                            className={`nav-acceder ${textColorClass}`}
                            style={isScrolled ? {filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))"} : {filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))"}}
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