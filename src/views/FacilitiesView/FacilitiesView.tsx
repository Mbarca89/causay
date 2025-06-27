import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from 'react-bootstrap';

interface Facility {
    id: number
    title: string
    text: string
    image: string
}

const FacilitiesView: React.FC = () => {

    const programs: Facility[] = [{
        id: 1,
        title: "Conectividad",
        text: "Brindamos acceso a internet a nuestros alumnos y personal. Contamos con fibra óptica e internet satelital. Poseemos nuestros propios servidores para alojamiento de bases y sistemas. Todo el tráfico de internet de los alumnos se encuentra filtrado bajo estrictas medidas de seguridad contra sitios con contenidos inconvenientes o no apto para menores.",
        image: "/images/facilities/acustico.webp"
    },
    {
        id: 2,
        title: "Acondicionamiento acústico",
        text: "Debido al ruido las personas alzan involuntariamente la voz para hacerse oír, lo que a su vez genera aún más ruido. Este fenómeno repercute negativamente en el bienestar físico y mental de estudiantes y profesores, por ello luego de un estudio de impacto acústico, iniciamos el proyecto de acondicionamiento acústico. Actualmente todas las aulas de Educación Primaria y la galería central han sido intervenidas. Reduciendo el ruido, se ayuda a crear espacios más tranquilos y saludables.",
        image: "/images/facilities/acustico.webp"
    },
    {
        id: 3,
        title: "Estación de lavado",
        text: "Este espacio permite a los más pequeños un adecuado lavado de manos y también, después del almuerzo, higienizar su boca para prevenir enfermedades y reducir la propagación de gérmenes.",
        image: "/images/facilities/lavado.webp"
    },
    {
        id: 4,
        title: "Aulas secundaria",
        text: "Las aulas de Educación Secundaria poseen mobiliario moderno diseñado para uso intensivo y cuentan con pantalla táctil interactiva que permite que los usuarios escriban, editen y dibujen en la pantalla. Cuentan con tecnología táctil multi-touch.",
        image: "/images/facilities/aulaSecundaria.webp"
    },
    {
        id: 5,
        title: "Casilleros",
        text: "Los estudiantes pueden guardar sus pertenencias de forma segura, reducir la carga de llevar libros y materiales pesados, y desarrollar habilidades de organización.",
        image: "/images/facilities/casilleros.webp"
    },
    {
        id: 6,
        title: "Salas de descanso",
        text: "Los estudiantes de la Educación Primaria, luego de almorzar, descansan en las salas acondicionadas para este momento. Este descanso tiene varios beneficios para la salud y el bienestar. Permite que el cuerpo se concentre en la digestión, ayuda a reducir la fatiga y mejora la concentración, además de contribuir a un mejor estado de ánimo y rendimiento cognitivo.",
        image: "/images/facilities/descanso.webp"
    },
    {
        id: 7,
        title: "Mini gimnasio de ludoteca",
        text: "La actividad física favorece el desarrollo general de los niños y estimula la maduración neurológica, lo que impacta en el lenguaje, la atención y el aprendizaje futuro, además de fomentar la autonomía y confianza.",
        image: "/images/facilities/ludoteca.webp"
    },
    {
        id: 8,
        title: "Espacios de juego cubiertos",
        text: "En la galería central y en las de Primaria y Secundaria, disponemos de espacios de juego que brindan oportunidades de recreación durante los tiempos de descanso, favoreciendo el desarrollo integral de los estudiantes mediante el juego espontáneo y social.",
        image: "/images/facilities/espaciosCubiertos.webp"
    },
    {
        id: 9,
        title: "Palestra",
        text: "Con esta mini palestra logramos fortalecer el cuerpo (equilibrio, coordinación, fuerza) y también estimular la mente (pensar, planificar y resolver para llegar más alto). Además,  desarrollamos la autonomía, la confianza y favorecemos la socialización.",
        image: "/images/facilities/palestra.webp"
    },
    {
        id: 10,
        title: "Playón polideportivo, tribunas y juegos",
        text: "Creamos espacios funcionales y seguros para la práctica de actividades físicas y recreativas, fomentando un estilo de vida saludable entre los estudiantes. Estos espacios se adaptan a diferentes deportes y actividades.",
        image: "/images/facilities/playonDeportivo.webp"
    }
    ]

    const [activeProgram, setActiveProgram] = useState<number>(0);

    const goToPrevious = () => {
        setActiveProgram((prev) => (prev !== 0 ? prev - 1 : programs.length - 1))
    }

    const goToNext = () => {
        setActiveProgram((prev) => (prev !== programs.length - 1 ? prev + 1 : 0))
    }

    // Configure swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => goToNext(),
        onSwipedRight: () => goToPrevious(),
        trackMouse: false,
        preventScrollOnSwipe: true,
    })

    return (
        <Container>

            <div className='mt-3 d-flex flex-column flex-md-row p-2 mb-5'>
                <div className='d-flex d-md-none justify-content-between align-items-center mb-3'>
                    <button onClick={activeProgram != 1 ? () => setActiveProgram(activeProgram - 1) : () => setActiveProgram(programs.length - 1)}><ChevronLeft /></button>
                    <h3 className='fs-6 m-0'>{programs[activeProgram].title}</h3>
                    <button onClick={activeProgram != programs.length - 1 ? () => setActiveProgram(activeProgram + 1) : () => setActiveProgram(1)}><ChevronRight /></button>
                </div>
                <div className='d-none d-md-flex flex-column justify-content-start text-nowrap gap-1' style={{ minWidth: "300px" }}>
                    {programs.map((program, index) => (
                        <button
                            key={program.id}
                            onClick={() => setActiveProgram(index)}
                            className={`d-flex text-start h-100 align-items-center border-0 bg-transparent py-2 ${activeProgram === index ? "fw-bold" : ""
                                }`}
                        >
                            <p className="d-flex m-0">
                                <span
                                    className={`border-b border-transparent ${activeProgram === index ? "border-green-500" : "hover:border-green-500"}`}
                                >
                                    {program.title}
                                </span>
                                {activeProgram === index && (
                                    <span>
                                        <ChevronRight className="ms-2" />
                                    </span>
                                )}
                            </p>
                        </button>
                    )
                    )}
                </div>
                <div {...swipeHandlers} className="bg-light shadow-md rounded text-center p-3">
                    <div className="">
                        <h3 className="d-none d-md-block text-dark" >{programs[activeProgram].title}</h3>
                        <p className="mt-0 text-secondary" >{programs[activeProgram].text}</p>
                    </div>
                    {programs[activeProgram].image && (
                        <img
                            src={programs[activeProgram].image}
                            alt=""
                            className="rounded"
                        />
                    )}

                </div>
            </div>
        </Container>
    )
};

export default FacilitiesView;