import React, { useRef } from 'react';
import { useState } from "react"
import { HeartPulse, ShieldCheck, Brain, UtensilsCrossed, BookOpen, Apple } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from 'react-bootstrap';

const ServicesView: React.FC = () => {

    const [expandedService, setExpandedService] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedService(index)
    }

    const mySectionRef = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
        if (mySectionRef.current) {
            const offset = 120;
            const top = mySectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const services = [
        {
            title: "Protección Médica",
            icon: <ShieldCheck className="h-10 w-10" />,
            shortDescription: "Seguro médico para estudiantes durante la jornada escolar y actividades especiales.",
            fullDescription: (
                <div className="space-y-4">
                    <p>
                        Contamos con un seguro por alumno que permite reintegrarle el costo de la asistencia médica originada por
                        causas de accidentes cuya ocurrencia tenga lugar durante la jornada escolar o durante actividades especiales
                        realizadas dentro o fuera del establecimiento.
                    </p>
                </div>
            ),
        },
        {
            title: "Escuela Cardioprotegida",
            icon: <HeartPulse className="h-10 w-10" />,
            shortDescription: "Equipamiento y personal capacitado para emergencias cardíacas.",
            fullDescription: (
                <div className="space-y-4">
                    <p>
                        CAUSAY es una escuela CARDIOPROTEGIDA. Nuestro edificio cuenta con equipo desfibrilador, personas
                        adecuadamente formadas, y otros elementos, en número y disposición adecuados como para poder garantizar que
                        es posible actuar rápida y eficientemente contra los paros cardiacos repentinos, como primer interviniente,
                        hasta la llegada de los servicios de emergencia.
                    </p>
                    <div className='flex align-items-center justify-content-center'>
                        <picture>
                            <source className='rounded' media="(min-width: 769px)" srcSet="/images/services/cardioprotegidaW.webp" />
                            <img className='rounded' src="/images/services/cardioprotegida.webp" alt="" />
                        </picture>
                    </div>
                </div>
            ),
        },
        {
            title: "Gabinete Psicofonopedagógico",
            icon: <Brain className="h-10 w-10" />,
            shortDescription: "Profesionales que orientan el aprendizaje y garantizan la calidad educativa.",
            fullDescription: (
                <div className="space-y-4">
                    <p>
                        Nuestro Gabinete, integrado por profesionales de vasta experiencia en trabajo institucional, contribuye a la
                        orientación técnica del aprendizaje y a garantizar la calidad del servicio educativo.
                    </p>
                    <p>
                        Su tarea es atender y orientar consultas vinculadas a dificultades de aprendizaje y comportamiento escolar, asesorando a los docentes en la aplicación de dinámicas individuales y grupales que favorezcan la coordinación del saber en diferentes campos del conocimiento y orientando a las familias sobre las necesidades de los estudiantes para el mejor desempeño escolar.
                    </p>
                </div>
            ),
        },
        {
            title: "Comedor",
            icon: <UtensilsCrossed className="h-10 w-10" />,
            shortDescription: "Alimentación equilibrada y educación en hábitos alimenticios saludables.",
            fullDescription: (
                <div className="space-y-4">
                    <p>
                        Tratamos de contribuir desde el Comedor Escolar a una buena educación en los hábitos de los alumnos/as,
                        proporcionando una dieta correcta, completa, equilibrada, inocua, suficiente y variada, preparada en
                        condiciones higiénicas, con insumos de calidad y a bajo costo.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Completa:</strong> que contenga todos los nutrimentos.
                        </li>
                        <li>
                            <strong>Equilibrada:</strong> que los nutrientes guarden las proporciones apropiadas entre sí.
                        </li>
                        <li>
                            <strong>Inocua:</strong> que su consumo habitual no implique riesgos para la salud porque está exenta de
                            microrganismos patógenos, toxinas, contaminantes, que se consuma con mesura y que no aporte cantidades
                            excesivas de ningún componente o nutriente.
                        </li>
                        <li>
                            <strong>Suficiente:</strong> que cubra las necesidades de todos los nutrientes, para que los niños/as,
                            crezcan y se desarrollen de manera correcta.
                        </li>
                        <li>
                            <strong>Variada:</strong> que de una comida a otra, incluya alimentos diferentes de cada grupo.
                        </li>
                    </ul>
                    <div className='flex align-items-center justify-content-center'>
                        <picture>
                            <source className='rounded' media="(min-width: 769px)" srcSet="/images/services/comedorW.webp" />
                            <img className='rounded' src="/images/services/comedor.webp" alt="" />
                        </picture>
                    </div>
                    <p>
                        Nuestro objetivo es conseguir que el Comedor Escolar no solo sea un sitio donde se come, sino intentar
                        convertirlo en un lugar que cumpla otra serie de funciones:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Que en el comedor escolar se desarrollen buenos y adecuados hábitos de alimentación.</li>
                        <li>Que facilite el desarrollo de adecuados hábitos de higiene.</li>
                        <li>
                            Que se ofrezca una dieta variada que permita a los escolares habituarse en el consumo de alimentos
                            saludables que enriquezcan la dieta familiar.
                        </li>
                        <li>Que facilite las relaciones sociales entre los niños y fomente su participación en la vida escolar.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Biblioteca",
            icon: <BookOpen className="h-10 w-10" />,
            shortDescription: "Más de 14.000 recursos bibliográficos disponibles para la comunidad educativa.",
            fullDescription: (
                <div className="space-y-4">
                    <p>
                        Es una Biblioteca escolar que cuenta con más de 14.000 recursos bibliográficos, que incluye libros,
                        revistas, mapas, láminas y obras de referencia. El acervo bibliográfico contiene temáticas tales como
                        ciencias de la educación y pedagogía; manuales para el docente y el alumno; literatura infantil, juvenil y
                        para adultos; y una amplia colección que refleja la historia, geografía y literatura de San Luis.
                    </p>
                    <p>
                        Se llevan adelante diversas actividades literarias, culturales y de extensión con la participación de toda
                        la comunidad educativa.
                    </p>
                    <div className='flex align-items-center justify-content-center'>
                        <picture>
                            <source className='rounded' media="(min-width: 769px)" srcSet="/images/services/bibliotecaW.webp" />
                            <img className='rounded' src="/images/services/biblioteca.webp" alt="" />
                        </picture>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mt-3">
                        <h4 className="font-medium mb-2">Asociate</h4>
                        <p>
                            Si estás interesado en hacer uso de nuestra biblioteca, tenés que asociarte. La asociación es anual y para
                            acceder a la misma se requiere la donación de un libro en el caso de los usuarios internos y la donación
                            de un libro y el llenado de la Ficha de Inscripción en el caso de los usuarios externos.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2">Consulta en la Sala de Lectura</h4>
                        <p>
                            En la Sala de Lectura se puede consultar todo el material que posee la Biblioteca. El siguiente material
                            puede ser consultado exclusivamente en la Sala de Lectura: Diccionarios, enciclopedias, bibliografías,
                            directorios, catálogos, revistas.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2">Usuarios</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Usuarios Internos:</strong> Alumnos de Causay y su grupo familiar y personal.
                            </li>
                            <li>
                                <strong>Usuarios Externos:</strong> Personas de la comunidad.
                            </li>
                        </ul>
                        <p className="mt-2">
                            Los Usuarios Internos pueden hacer uso de los servicios de búsquedas en catálogos, consulta en Sala de
                            Lectura, préstamo diario, préstamo a domicilio, reservas, orientación en la búsqueda de información,
                            localización de bibliografía.
                        </p>
                        <p className="mt-2">
                            Los Usuarios externos pueden hacer uso de los servicios de búsquedas en catálogos, consultas en Sala de
                            Lectura, orientación en la búsqueda de información, localización de bibliografía.
                        </p>
                    </div>
                </div>
            ),
        },
         {
            title: "Kiosco Saludable",
            icon: <Apple className="h-10 w-10" />,
            shortDescription: "Snacks y bebidas nutritivas para fomentar elecciones alimentarias saludables.",
            fullDescription: (
                <div className="space-y-4">
                    <p>
                        Estimulamos a los niños y adolescentes a elegir mejor, incorporando hábitos positivos. Promovemos la salud desde el currículo y el kiosco alinea el discurso con la práctica.
                    </p>
                    <div className='flex align-items-center justify-content-center'>
                        <picture>
                            <source className='rounded' media="(min-width: 769px)" srcSet="/images/services/kioscoW.webp" />
                            <img className='rounded' src="/images/services/kiosco.webp" alt="" />
                        </picture>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-12 border-b border-green-500">
                <h1 className="text-3xl font-light mb-4">Servicios</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    En CAUSAY ofrecemos una variedad de servicios diseñados para garantizar el bienestar, desarrollo y seguridad
                    de nuestros estudiantes.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 border-b border-green-500 pb-4">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "overflow-hidden transition-all duration-300",

                        )}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-4">
                                <div className="text-green-500 rounded-full">{service.icon}</div>
                                <div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <CardDescription className="text-base">{service.shortDescription}</CardDescription>
                                <Button variant="success" onClick={() => { toggleExpand(index); scrollToSection() }}>
                                    Ver más
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div ref={mySectionRef} ></div>
            <div className="space-y-4 mt-4">
                <h2>{services[expandedService || 0].title}</h2>
                {services[expandedService || 0].fullDescription}
            </div>
        </div>
    );
};

export default ServicesView;