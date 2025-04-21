import { Col, Container, Row } from "react-bootstrap"
import { ChevronRight, Phone, Mail, Clock, MapPin, ArrowRight, Menu } from "lucide-react"


const FooterAlt = () => {
    return (
        <footer className="bg-green-500 text-white">
        {/* Wave divider */}
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
  
        {/* Main content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Logo and about */}
            <div className="md:w-1/4">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-full mr-3">
                  <img
                    src="/images/logo.png"
                    alt="Centro Educativo Causay Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xl font-bold">Centro Educativo Causay</h3>
              </div>
              <p className="text-green-100 mb-6">Formando el futuro de nuestros niños desde 2005.</p>
  
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm">La Vecindad, El Amparo</p>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <p className="text-sm">+54 (0266) 442 9011</p>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <a href="mailto:info@causay.edu.ar" className="text-sm hover:underline">
                    info@causay.edu.ar
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2 flex-shrink-0" />
                  <p className="text-sm">Lun - Vie: 8:00 - 17:00</p>
                </div>
              </div>
            </div>
  
            {/* Quick as */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-3/4">
              {/* Secciones */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <span className="w-8 h-1 bg-green-300 mr-2"></span>
                  Secciones
                </h4>
                <div className="grid grid-cols-1 gap-y-4">
                  <div>
                    <h5 className="font-medium mb-2 text-green-200">Institucional</h5>
                    <ul className="space-y-2">
                      {["Pilares", "Propuesta pedagógica", "Normativa"].map((item) => (
                        <li key={item} className="flex items-center">
                          <ChevronRight size={14} className="text-green-300 mr-1" />
                          <a href="#" className="text-sm hover:text-green-200 transition-colors">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-green-200">Niveles</h5>
                    <ul className="space-y-2">
                      {["Educación inicial", "Educación primaria", "Educación secundaria", "Educación superior"].map(
                        (item) => (
                          <li key={item} className="flex items-center">
                            <ChevronRight size={14} className="text-green-300 mr-1" />
                            <a href="#" className="text-sm hover:text-green-200 transition-colors">
                              {item}
                            </a>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
  
              {/* Servicios */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <span className="w-8 h-1 bg-green-300 mr-2"></span>
                  Servicios
                </h4>
                <ul className="space-y-2">
                  {["Talleres", "Gabinete", "Comedor", "Biblioteca", "Seguro médico", "Cardioprotección"].map((item) => (
                    <li key={item} className="flex items-center">
                      <ChevronRight size={14} className="text-green-300 mr-1" />
                      <a href="#" className="text-sm hover:text-green-200 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Instalaciones */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <span className="w-8 h-1 bg-green-300 mr-2"></span>
                  Instalaciones
                </h4>
                <ul className="space-y-2">
                  {[
                    "Salon de usos múltiples",
                    "Espacios de juego",
                    "Zonas de descanso",
                    "Aulas",
                    "Comedor",
                    "Sala multimedia",
                    "Canchas",
                    "Desfibrilador",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <ChevronRight size={14} className="text-green-300 mr-1" />
                      <a href="#" className="text-sm hover:text-green-200 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="bg-green-600 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-green-100">© 2025 Centro Educativo Causay. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
}

export default FooterAlt