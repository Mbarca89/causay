import { Col, Container, Row } from "react-bootstrap"
import { ChevronRight, Phone, Mail, Clock, MapPin, ArrowRight, Menu } from "lucide-react"


const Footer = () => {
    return (
        <footer className="text-light" style={{ backgroundColor: "rgba(5, 174, 1, 0.8)", marginTop: "-7px" }}>
            <div className="w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-12"
                    data-name="Layer 1"
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
            <Container>
                <Row className="mb-3 g-4">
                    <Col lg={2} md={4} sm={12} className="mb-3 text-center text-md-start">
                        <img src="/images/logo.png" alt="Logo Causay" className="img-fluid" style={{ maxHeight: '80px' }} />
                    </Col>

                    <Col lg={6} md={8} sm={12}>
                        <h5 className="mb-2 text-decoration-underline">Secciones:</h5>
                        <Row className="g-2">
                            <Col sm={4}>
                                <h6 className="">Institucional</h6>
                                <ul className="list-unstyled mb-2 small">
                                    <li><a href="#" className="text-secondary">Pilares</a></li>
                                    <li><a href="#" className="text-secondary">Propuesta pedagógica</a></li>
                                    <li><a href="#" className="text-secondary">Normativa</a></li>
                                </ul>

                                <h6 className=" mt-2">Niveles</h6>
                                <ul className="list-unstyled small">
                                    <li><a href="#" className="text-secondary">Educación inicial</a></li>
                                    <li><a href="#" className="text-secondary">Educación primaria</a></li>
                                    <li><a href="#" className="text-secondary">Educación secundaria</a></li>
                                    <li><a href="#" className="text-secondary">Educación superior</a></li>
                                </ul>
                            </Col>

                            <Col sm={4}>
                                <h6 className="">Servicios</h6>
                                <ul className="list-unstyled small">
                                    <li><a href="#" className="text-secondary">Talleres</a></li>
                                    <li><a href="#" className="text-secondary">Gabinete</a></li>
                                    <li><a href="#" className="text-secondary">Comedor</a></li>
                                    <li><a href="#" className="text-secondary">Biblioteca</a></li>
                                    <li><a href="#" className="text-secondary">Seguro médico</a></li>
                                    <li><a href="#" className="text-secondary">Cardioprotección</a></li>
                                </ul>
                            </Col>

                            <Col sm={4}>
                                <h6 className="">Instalaciones</h6>
                                <ul className="list-unstyled small">
                                    <li><a href="#" className="text-secondary">Salon de usos múltiples</a></li>
                                    <li><a href="#" className="text-secondary">Espacios de juego</a></li>
                                    <li><a href="#" className="text-secondary">Zonas de descanso</a></li>
                                    <li><a href="#" className="text-secondary">Aulas</a></li>
                                    <li><a href="#" className="text-secondary">Comedor</a></li>
                                    <li><a href="#" className="text-secondary">Sala multimedia</a></li>
                                    <li><a href="#" className="text-secondary">Canchas</a></li>
                                    <li><a href="#" className="text-secondary">Desfibrilador</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={12}>
                        <Row className="g-3">
                            <Col md={6} sm={12} className="mb-2">
                                <div className="">
                                    <h5 className="mb-2 text-decoration-underline">Contacto:</h5>
                                    <ul className="space-y-3 text-sm p-0 text-secondary">
                                        <li className="flex items-center">
                                            <Phone className="mr-2 h-4 w-4 text-grey" />
                                            <span>+54 (0266) 442 9011</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Mail className="mr-2 h-4 w-4 text-grey" />
                                            <span>info@causay.edu.ar</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Clock className="mr-2 h-4 w-4 text-grey" />
                                            <span>Lun - Vie: 8:00 - 17:00</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <h5 className="text-decoration-underline">Ubicación:</h5>
                                <div className="ratio ratio-4x3">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4177.153203909893!2d-66.31645702354515!3d-33.298545873450124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43ea12a61bfaf%3A0x3974f279e2ab434e!2sCentro%20Educativo%20Causay%2C%20C.%20Quines%20655%2C%20D5700%20San%20Luis!5e1!3m2!1ses-419!2sar!4v1744027886666!5m2!1ses-419!2sar"
                                        className="border-0"
                                        loading="lazy"
                                        allowFullScreen
                                        title="Ubicación Causay"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center border-top pt-3">
                        <small>&copy; {new Date().getFullYear()} Centro Educativo Causay. Todos los derechos reservados.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer