import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="py-4" style={{ backgroundColor: "rgba(5, 174, 1, 0.5)" }}>
            <Container>
                <Row className="mb-3 g-4">
                    <Col lg={2} md={4} sm={12} className="mb-3 text-center text-md-start">
                        <img src="/images/logo.png" alt="Logo Causay" className="img-fluid" style={{ maxHeight: '80px' }} />
                    </Col>

                    <Col lg={6} md={8} sm={12}>
                        <h5 className="mb-2">Secciones:</h5>
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
                                <h5>Horarios:</h5>
                                <p className="mb-3 small">Lun. a Vie.: 08:00 hs. – 17:00 hs.</p>

                                <h5>Contacto:</h5>
                                <address className="mb-0 small">
                                    <p className="mb-1">Dirección: Quines 655 | San Luis</p>
                                    <p className="mb-1">E-mail: <a href="mailto:info@causay.edu.ar" className="text-secondary">info@causay.edu.ar</a></p>
                                    <p className="mb-1">Tel: +54 (0266) 442 9011</p>
                                    <p className="mb-1">Cel: +54 (266) 4 73 23 05</p>
                                </address>
                            </Col>

                            <Col md={6} sm={12}>
                                <h5>Ubicación:</h5>
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