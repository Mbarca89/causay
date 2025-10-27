import "./Footer.css"
import { Col, Container, Row } from "react-bootstrap";
import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="text-light position-relative w-100 bottom-0"
            style={{ backgroundColor: "rgba(5, 174, 1, 0.95)", marginTop: "-7px" }}
        >
            {/* --- Wave --- */}
            <div className="w-full overflow-hidden leading-none" style={{ marginTop: "-1px" }}>
                <svg
                    className="relative block w-full h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            <Container as="section" aria-label="Pie de página">
                <Row className="mb-3 g-4">
                    {/* --- Logo --- */}
                    <Col lg={2} md={4} sm={12} className="mb-3 text-center text-md-start">
                        <img
                            src="/images/logo.png"
                            alt="Logo del Centro Educativo Causay"
                            className="img-fluid"
                            style={{ maxHeight: "80px" }}
                        />
                    </Col>

                    {/* --- Secciones --- */}
                    <Col lg={6} md={8} sm={12}>
                        <h2 className="mb-2 text-decoration-underline fs-5">Secciones</h2>
                        <Row>
                            {[
                                {
                                    title: "Institucional",
                                    path: "/institucional",
                                    items: [
                                        { text: "Pilares", path: "/institucional/pilares" },
                                        { text: "Propuesta pedagógica", path: "/institucional/propuesta" },
                                        { text: "Normativa", path: "/institucional/normativa" },
                                    ],
                                },
                                {
                                    title: "Niveles",
                                    path: "/niveles",
                                    items: [
                                        { text: "Educación inicial", path: "/niveles/inicial" },
                                        { text: "Educación primaria", path: "/niveles/primaria" },
                                        { text: "Educación secundaria", path: "/niveles/secundaria" },
                                    ],
                                },
                                { title: "Servicios", path: "/servicios" },
                                { title: "Instalaciones", path: "/instalaciones" },
                                { title: "Talleres", path: "/talleres" },
                                { title: "Aranceles", path: "/aranceles" },
                                { title: "Becas", path: "/becas" },
                            ].map((section, index) => (
                                <Col key={index} sm={4} className="mb-3">
                                    <h3 className="mb-1 fs-6">
                                        <Link
                                            to={section.path}
                                            className="text-light text-decoration-none d-inline-block py-1"
                                            title={section.title}
                                        >
                                            {section.title}
                                        </Link>
                                    </h3>

                                    {section.items && (
                                        <ul
                                            className="list-unstyled small ps-3 d-flex flex-column gap-1"
                                            style={{ listStyleType: "disc" }}
                                        >
                                            {section.items.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={item.path}
                                                        className="text-secondary text-decoration-none d-inline-block py-1"
                                                        title={item.text}
                                                        style={{ transition: "color 0.2s ease" }}
                                                    >
                                                        {item.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* --- Contacto / Ubicación --- */}
                    <Col lg={4} md={12}>
                        <Row className="g-3">
                            <Col md={6} sm={12}>
                                <h2 className="mb-2 text-decoration-underline fs-5">Contacto</h2>
                                <ul className="list-unstyled small text-gray-100">
                                    <li className="d-flex align-items-center gap-2 py-1">
                                        <Phone size={16} aria-hidden="true" />
                                        <span>+54 (266) 442 9011</span>
                                    </li>

                                    <li className="d-flex align-items-center gap-2 py-1">
                                        {/* WhatsApp con icono SVG accesible */}
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="text-gray-100"
                                        >
                                            <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.47 0 .1 5.35.1 11.94a11.83 11.83 0 0 0 1.64 6L0 24l6.24-1.63a12.18 12.18 0 0 0 5.76 1.47h.01c6.58 0 11.95-5.36 11.95-11.94a11.92 11.92 0 0 0-3.44-8.42ZM12 21.55h-.01a9.57 9.57 0 0 1-4.88-1.34l-.35-.21-3.71.97.99-3.63-.23-.37a9.53 9.53 0 0 1-1.46-5.12A9.67 9.67 0 0 1 12.05 2.4a9.6 9.6 0 0 1 6.82 16.45A9.57 9.57 0 0 1 12 21.55Zm5.27-7.18c-.29-.14-1.73-.85-2-1-.27-.1-.47-.14-.67.14s-.77 1-.95 1.19-.35.21-.64.07a7.85 7.85 0 0 1-2.3-1.41 8.57 8.57 0 0 1-1.58-1.95c-.17-.28 0-.43.13-.57.13-.13.28-.34.42-.51a1.89 1.89 0 0 0 .28-.47.53.53 0 0 0 0-.5c-.08-.14-.67-1.61-.91-2.2s-.48-.52-.67-.53h-.57a1.1 1.1 0 0 0-.79.36c-.27.28-1.03 1-1.03 2.38s1.06 2.75 1.2 2.94a11.8 11.8 0 0 0 4.46 4.07 14.89 14.89 0 0 0 1.48.55 3.56 3.56 0 0 0 1.64.1c.5-.07 1.53-.63 1.75-1.23s.22-1.12.15-1.23-.24-.18-.53-.32Z" />
                                        </svg>
                                        <a
                                            href="https://wa.me/5492664732305"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-100 text-decoration-none hover:text-white"
                                            aria-label="Contactar por WhatsApp"
                                        >
                                            +54 (266) 473 2305
                                        </a>
                                    </li>

                                    <li className="d-flex align-items-center gap-2 py-1">
                                        <Mail size={16} aria-hidden="true" />
                                        <a
                                            href="mailto:info@causay.edu.ar"
                                            className="text-gray-100 hover:text-white text-decoration-none"
                                        >
                                            info@causay.edu.ar
                                        </a>
                                    </li>

                                    <li className="d-flex align-items-center gap-2 py-1">
                                        <Clock size={16} aria-hidden="true" />
                                        <span>Lun - Vie: 8:00 - 17:00</span>
                                    </li>
                                </ul>
                            </Col>

                            <Col md={6} sm={12}>
                                <h2 className="mb-2 text-decoration-underline fs-5">Ubicación</h2>
                                <div className="ratio ratio-4x3">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4177.153203909893!2d-66.31645702354515!3d-33.298545873450124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43ea12a61bfaf%3A0x3974f279e2ab434e!2sCentro%20Educativo%20Causay%2C%20C.%20Quines%20655%2C%20D5700%20San%20Luis!5e1!3m2!1ses-419!2sar!4v1744027886666!5m2!1ses-419!2sar"
                                        className="border-0"
                                        loading="lazy"
                                        allowFullScreen
                                        title="Ubicación del Centro Educativo Causay en Google Maps"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center border-top pt-3">
                        <small>
                            &copy; {new Date().getFullYear()} Centro Educativo Causay. Todos los derechos
                            reservados.
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
