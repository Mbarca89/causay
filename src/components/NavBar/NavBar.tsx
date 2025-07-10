import "./NavBar.css"
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { SplitHoverDropdown } from '../../CustomComponents/Dropdown/SplitHoverDropdown';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
                    onClick={() => navigate("/")}
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
                            onClick={() => navigate("/")}
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
                        />
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/servicios")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Servicios
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/instalaciones")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Instalaciones
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/talleres")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Talleres
                        </Nav.Link>
                         <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/galeria")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Galeria
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/aranceles")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Aranceles
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/becas")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Becas
                        </Nav.Link>
                        <Nav.Link
                            className={textColorClass}
                            onClick={() => navigate("/contacto")}
                            style={{ filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))" }}
                        >
                            Contacto
                        </Nav.Link>
                        <SplitHoverDropdown
                            title="Acceder"
                            customClassName={textColorClass}
                            link="acceder"
                            items={[
                                { label: 'Acceso Alumnos', link: 'niveles/inicial' },
                                { label: 'Acceso Docentes', link: 'niveles/primaria' },
                            ]}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar