import { Col, Container, Row } from "react-bootstrap"
import { Phone, Mail, Clock } from "lucide-react"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-light position-relative w-100 bottom-0" style={{ backgroundColor: "rgba(5, 174, 1, 0.8)", marginTop: "-7px" }}>
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
                        <Row>
                            {[
                                {
                                    title: "Institucional",
                                    path: "/institucional",
                                    items: [
                                        { text: "Pilares", path: "/institucional/pilares" },
                                        { text: "Propuesta pedagógica", path: "/institucional/propuesta" },
                                        { text: "Normativa", path: "/institucional/normativa" },
                                    ]
                                },
                                {
                                    title: "Niveles",
                                    path: "/niveles",
                                    items: [
                                        { text: "Educación inicial", path: "/niveles/inicial" },
                                        { text: "Educación primaria", path: "/niveles/primaria" },
                                        { text: "Educación secundaria", path: "/niveles/secundaria" },
                                    ]
                                },
                                { title: "Servicios", path: "/servicios" },
                                { title: "Instalaciones", path: "/instalaciones" },
                                { title: "Talleres", path: "/talleres" },
                                { title: "Aranceles", path: "/aranceles" },
                                { title: "Becas", path: "/becas" },
                            ].map((section, index) => (
                                <Col key={index} sm={4} className="mb-3">
                                    <h6 className="mb-1">
                                        <Link to={section.path} className="text-light text-decoration-none">{section.title}</Link>
                                    </h6>
                                    {section.items && (
                                        <ul className="list-unstyled small ps-3">
                                            {section.items.map((item, i) => (
                                                <li key={i} style={{ listStyleType: "disc" }}>
                                                    <Link to={item.path} className="text-secondary">{item.text}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col lg={4} md={12}>
                        <Row className="g-3">
                            <Col md={6} sm={12} className="mb-2">
                                <div>
                                    <h5 className="mb-2 text-decoration-underline">Contacto:</h5>
                                    <ul className="space-y-3 text-sm p-0 text-secondary">
                                        <li className="flex items-center">
                                            <Phone className="mr-2 h-4 w-4 text-grey" />
                                            <span>+54 (266) 442 9011</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                                <path d="M19.074 4.89389C17.2091 3.02894 14.6689 2 12.0644 2C6.59814 2 2.12869 6.4373 2.12869 11.9035C2.12869 13.672 2.57885 15.3441 3.44702 16.8875L2.03223 22L7.33769 20.6495C8.78464 21.4212 10.4245 21.8714 12.0965 21.8714C17.5306 21.8392 21.9679 17.4019 21.9679 11.9035C21.9679 9.26688 20.939 6.791 19.074 4.89389ZM12.0322 20.1672C10.5853 20.1672 9.07403 19.7492 7.82001 18.9775L7.49846 18.7846L4.37949 19.5884L5.24766 16.5659L5.05473 16.2444C4.25088 14.926 3.80072 13.3826 3.80072 11.8392C3.80072 7.30547 7.46631 3.63987 12.0322 3.63987C14.2187 3.63987 16.2766 4.50804 17.82 6.05145C19.3634 7.59486 20.2316 9.68489 20.2316 11.9035C20.2959 16.5016 16.566 20.1672 12.0322 20.1672ZM16.566 13.9936C16.3088 13.865 15.119 13.254 14.8297 13.2219C14.6046 13.1254 14.4116 13.0932 14.283 13.3505C14.1544 13.6077 13.6399 14.1222 13.5113 14.3151C13.3827 14.4437 13.2541 14.508 12.9647 14.3473C12.7075 14.2187 11.9358 13.9936 10.9711 13.0932C10.2316 12.4502 9.71711 11.6463 9.62065 11.3569C9.49203 11.0997 9.5885 11.0032 9.74927 10.8424C9.87788 10.7138 10.0065 10.5852 10.103 10.3923C10.2316 10.2637 10.2316 10.135 10.3602 9.97428C10.4888 9.84566 10.3924 9.65274 10.328 9.52412C10.2316 9.3955 9.78142 8.17364 9.55634 7.65917C9.36342 7.1447 9.13834 7.24116 9.00972 7.24116C8.8811 7.24116 8.68817 7.24116 8.55956 7.24116C8.43094 7.24116 8.1094 7.27331 7.91647 7.5627C7.69139 7.81994 7.0483 8.43087 7.0483 9.65273C7.0483 10.8746 7.91647 12 8.07724 12.2251C8.20586 12.3537 9.84573 14.8939 12.2895 15.9871C12.8682 16.2444 13.3184 16.4051 13.7043 16.5338C14.283 16.7267 14.8297 16.6624 15.2477 16.6302C15.73 16.5981 16.6946 16.0514 16.9197 15.4405C17.1126 14.8939 17.1126 14.3473 17.0483 14.2508C16.984 14.1865 16.7911 14.09 16.566 13.9936Z" fill="#6c757d" />
                                            </svg>

                                            <span>+54 (266) 4732305</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Mail className="mr-2 h-4 w-4 text-grey" />
                                            <a href="mailto:info@causay.edu.ar" className="text-secondary">info@causay.edu.ar</a>
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

export default Footer;
